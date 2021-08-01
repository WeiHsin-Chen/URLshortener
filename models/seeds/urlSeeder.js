const url = require("../url")
const urlData = require("../seeds/shortenUrl.json")
const db = require("../../config/mongoose")

db.once("open", () => {
  url.create(urlData.shortenUrlSeeds)
    .then(() => {
      console.log("url seeder done!");
      return db.close();
    })
    .then(() => {
      console.log('database connection closed...')
    })
})