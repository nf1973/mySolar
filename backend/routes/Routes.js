import express from "express";
import {
  getAvailableMonths,
  getSolarLogs,
  getSolarLogsByDate,
} from "../contollers/Controllers.js";
const router = express.Router();

router.get("/getsolarlogs", getSolarLogs);
router.get("/getsolarlogs/:date", getSolarLogsByDate);
router.get("/getavailablemonths", getAvailableMonths);

export default router;
