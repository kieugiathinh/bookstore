import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cron from "node-cron";
import sendWelcomeEmail from "./emailservices/sendWelcomeEmail.js";
import sendPendingOrderEmail from "./emailservices/sendPendingOrderEmail.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

//Schedule Services
const services = () => {
  cron.schedule("* * * * *", () => {});
  sendWelcomeEmail();
  sendPendingOrderEmail();
};

services();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection();
});
