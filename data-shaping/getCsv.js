const fs = require('fs')
const parse = require('csv-parse/lib/sync')

const GetCSV = function readCsvSync(filename, options) {
  const content = fs.readFileSync(filename).toString()
  return parse(content, options)
}

module.exports = GetCSV
