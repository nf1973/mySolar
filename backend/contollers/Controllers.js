import { Sequelize } from "sequelize";
import SolarLogs from "../models/DataModel.js";
const Op = Sequelize.Op;

export const getSolarLogs = async (req, res) => {
  try {
    const response = await SolarLogs.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [["date", "ASC"]],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSolarLogsByDate = async (req, res) => {
  try {
    const response = await SolarLogs.findAll({
      where: {
        date: { [Op.like]: `${req.params.date}%` },
      },
      order: [["date", "ASC"]],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAvailableMonths = async (req, res) => {
  try {
    const response = await SolarLogs.sequelize.query(
      "SELECT DISTINCT SUBSTRING(date,1,6) AS 'YEARMONTH' FROM solarlogs ORDER BY YEARMONTH DESC;",
      {
        type: SolarLogs.sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMonthlyEnergy = async (req, res) => {
  try {
    const response = await SolarLogs.sequelize.query(
      "SELECT year, month, SUM(energyGenerated) AS energyGenerated FROM mysolar.solarlogs GROUP BY year, month ORDER BY year, month;",
      {
        type: SolarLogs.sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getYearlyEnergy = async (req, res) => {
  try {
    const response = await SolarLogs.sequelize.query(
      "SELECT year, SUM(energyGenerated) AS energyGenerated FROM mysolar.solarlogs GROUP BY year ORDER BY year;",
      {
        type: SolarLogs.sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
