const { Worker } = require("bullmq");
const { sendEmail } = require("./service/emailService");
require("dotenv").config();

const connection = {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
};

const resumePath = "<RESUME.pdf>";

const worker = new Worker(
  "emailQueue",
  async (job) => {
    await sendEmail(job.data, resumePath);
  },
  { connection }
);

worker.on("completed", (job) => {
  console.log(`Email sent to ${job.data.email}`);
});

worker.on("failed", (job, err) => {
  console.error(`Failed to send email to ${job?.data.email}:`, err);
});
