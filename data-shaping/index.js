const fs = require('fs')
const getCSV = require('./getCsv.js')
const csv = getCSV('uww2020.csv')
csv.shift()
const program = []

let preSeesionId = '0'
let session = {}
for (const row of csv) {
  if (row[5] !== preSeesionId) {
    program.push(session)
    session = {}
    session.date = row[0]
    session.duration = row[3]
    session.sessionName = row[4]
    session.sessionId = row[5]
    session.chairPerson = row[6]
    session.hasPresentation = row[7] !== '' ? true : false
    session.presentations = []
  }
  if (session.hasPresentation) {
    session.presentations.push({
      presentationId: row[7],
      title: row[8],
      speaker: row[9],
      affiliation: row[12],
      authors: row[13],
    })
  }

  preSeesionId = row[5]
}

program.shift()

const out = {
  program
}

fs.writeFile('./program.json', JSON.stringify(out), (err) => {
  console.log(err)
})