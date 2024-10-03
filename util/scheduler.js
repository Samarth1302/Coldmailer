const { readRecipients } = require("../service/excelService");
const { scheduleEmail } = require("./queue");

const excelPath = "<EXCEL FILENAME.xlsx>";
const recipients = readRecipients(excelPath);

recipients.forEach((recipient, index) => {
  const delay = index * 10000;
  scheduleEmail(recipient, delay);
});
