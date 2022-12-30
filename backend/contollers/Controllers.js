import SolarLogs from "../models/DataModel.js";

export const getSolarLogs = async (req, res) => {
  try {
    const response = await SolarLogs.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSolarLogsByDate = async (req, res) => {
  try {
    const response = await SolarLogs.findOne({
      where: {
        date: req.params.date,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
