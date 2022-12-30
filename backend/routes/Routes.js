import express from "express";
import { getSolarLogs, getSolarLogsByDate } from "../contollers/Controllers.js";
const router = express.Router();

router.get("/getsolarlogs", getSolarLogs);
router.get("/getsolarlogs/:date", getSolarLogsByDate);

export default router;
