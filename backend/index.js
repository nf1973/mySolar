import express from "express";
import cors from "cors";
import schedule from "node-schedule";
import {} from "dotenv/config";
import fetch from "node-fetch";
import SolarLogs from "./models/DataModel.js";
import Routes from "./routes/Routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);

app.listen(3050, () => console.log(Date(), ": API server started"));

// Cron Format
// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)

const job = schedule.scheduleJob("21 * * * *", async function (req, res) {
  //Get yesterday's date so that we can avoid to get today's data from PVo, as it will not be completed until the end of the day
  let yesterday = new Date(); //Not really yesterday, see below
  yesterday.setDate(yesterday.getDate() - 1);
  const dd = String(yesterday.getDate()).padStart(2, "0");
  const mm = String(yesterday.getMonth() + 1).padStart(2, "0"); //Adding 1 because January is 0
  const yyyy = yesterday.getFullYear();
  const yesterdayDate = yyyy + mm + dd;

  const PVO_APIKEY = process.env.PVO_APIKEY;
  const PVO_SID = process.env.PVO_SID;
  const pvoUrl =
    `https://pvoutput.org/service/r2/getoutput.jsp?key=${PVO_APIKEY}&sid=${PVO_SID}&dt=` +
    yesterdayDate;

  let response;
  let csv;
  let thisRow;

  //Pull the data from PVoutput.org - it will return 50 days ending on the "dt" value
  console.log(Date(), ": Starting API call");

  try {
    response = await fetch(pvoUrl);
    csv = await response.text();
  } catch (err) {
    //return res.sendStatus(404);
    return console.log(Date(), ":", err);
  }

  //Split (using semicolon) the data from PVoutput.org into an array
  let row = csv.split(";");

  //Loop through the array (from PVoutput.org), grab the interesting columns
  for (let i = 0; i < row.length; i++) {
    thisRow = row[i].split(",");
    var date = thisRow[0];
    var energyGenerated = thisRow[1];
    var efficiency = thisRow[2];
    var peakPower = thisRow[5];
    var peakTime = thisRow[6];
    var weatherCondition = thisRow[7];

    //Check if a document for this date already exists in the db, add a new record to the database, **only** if it does not exist already (avoiding duplicates)
    var recordIsNew;
    try {
      let result = await SolarLogs.findAll({
        logging: false,
        where: {
          date: date,
        },
      });
      if (result.length == 0) {
        recordIsNew = true;
      } else {
        recordIsNew = false;
        console.log(Date(), "Record already exists for ", date);
      }
    } catch (error) {
      console.log(
        Date(),
        ": Error while checking if record already exists",
        error
      );
    }

    //DB write only if record is new
    if (recordIsNew) {
      try {
        await SolarLogs.create({
          date: date,
          energyGenerated: energyGenerated,
          efficiency: efficiency,
          peakPower: peakPower,
          peakTime: peakTime,
          weatherCondition: weatherCondition,
        });
        console.log(Date(), ": Record added for ", date);
      } catch (error) {
        console.log(Date(), ": Error writing record", error);
      }
    }
  }
});
