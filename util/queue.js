const { Queue } = require("bullmq");
require("dotenv").config();

const connection = {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
};

const emailQueue = new Queue("emailQueue", { connection });

async function scheduleEmail(recipient, delay = 0) {
  await emailQueue.add("sendEmail", recipient, { delay });
}

module.exports = { emailQueue, scheduleEmail };
