import express from "express";
import {
  getAvailableMonths,
  getSolarLogs,
  getSolarLogsByDate,
  getMonthlyEnergy,
  getYearlyEnergy,
} from "../contollers/Controllers.js";
const router = express.Router();

router.get("/getsolarlogs", getSolarLogs);
router.get("/getsolarlogs/:date", getSolarLogsByDate);
router.get("/getavailablemonths", getAvailableMonths);
router.get("/getMonthlyEnergy", getMonthlyEnergy);
router.get("/getYearlyEnergy", getYearlyEnergy);

export default router;
