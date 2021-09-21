const readXlsxFile = require('read-excel-file/node')
const fs = require('fs')
// File path.
readXlsxFile('./js/link.xlsx').then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.
  console.log(rows)
  fs.writeFileSync("./output.json", JSON.stringify(rows))
})

// // Readable Stream.
// readXlsxFile(fs.createReadStream('./links.xlsx')).then((rows) => {
//     console.log(rows)
// })