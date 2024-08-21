const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "water_usage_data.xlsx");

if (!fs.existsSync(dataFilePath)) {
  const wb = xlsx.utils.book_new();
  const ws = xlsx.utils.aoa_to_sheet([["Date", "Value"]]);
  xlsx.utils.book_append_sheet(wb, ws, "Data");
  xlsx.writeFile(wb, dataFilePath);
}
