import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const SolarLogs = db.define(
  "solarlogs",
  {
    date: DataTypes.STRING,
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    energyGenerated: DataTypes.INTEGER,
    efficiency: DataTypes.DECIMAL(10, 3),
    peakPower: DataTypes.INTEGER,
    peakTime: DataTypes.STRING,
    weatherCondition: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default SolarLogs;

(async () => {
  await db.sync();
})();
