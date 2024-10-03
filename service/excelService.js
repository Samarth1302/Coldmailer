const XLSX = require("xlsx");

function readRecipients(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
    header: 1,
  });

  const recipients = data.slice(1).map((row) => ({
    name: row[0],
    email: row[1],
    company: row[2],
  }));

  return recipients;
}

module.exports = { readRecipients };
