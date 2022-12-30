import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const SolarLogs = db.define(
  "solarlogs",
  {
    date: DataTypes.STRING,
    energyGenerated: DataTypes.DECIMAL,
    efficiency: DataTypes.DECIMAL,
    peakPower: DataTypes.DECIMAL,
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
