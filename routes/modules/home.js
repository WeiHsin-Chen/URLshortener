// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const generateShortURL = require('../../tools/tools')

// route setting with models seeder connection
router.get('/', (req, res) => {

  res.render('index')
})

router.post('/', (req, res) => {
  const originalURL = req.body.originalURL

  res.render('index')
})


// 匯出路由模組
module.exports = router