const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const generateShortURL = require('../../tools/tools')


router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  const inputUrl = req.body.inputURL
  const currentUrl = req.headers.host
  const protocol = req.protocol
  let shortenUrl = ''
  let existedUrl = await Url.findOne({ url: inputUrl }).lean()

  if (existedUrl) {
    shortenUrl = existedUrl.shortenUrl
  }
  else {
    let isExistedShortenUrl = true
    while (isExistedShortenUrl) {
      shortenUrl = generateShortURL(inputUrl)
      isExistedShortenUrl = await Url.exists({ shortenUrl })
    }
    await Url.create({ url: inputUrl, shortenUrl })
  }
  res.render('index', { url: inputUrl, shortenUrl, currentUrl, protocol })
})

router.get("/:shortenUrl", (req, res) => {
  const shortenUrl = req.params.shortenUrl
  Url.findOne({ shortenUrl })
    .lean()
    .then((result) => {
      const redirectUrl = result ? result.url : "/"
      res.redirect(redirectUrl)
    })
})

module.exports = router