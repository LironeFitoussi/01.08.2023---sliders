// emailScheduler.js
const cron = require("node-cron");
const { sendMonthlyEmail } = require("./email");
const User = require("../models/userModel");

cron.schedule(
  "0 0 1 * *",
  async () => {
    try {
      const users = await User.find();

      users.forEach((user) => {
        console.log(user.email);
        sendMonthlyEmail(user.email);
      });

      console.log("Monthly emails sent successfully");
    } catch (error) {
      console.error("Error sending monthly emails:", error);
    }
  },
  {
    timezone: "Israel",
  }
);
