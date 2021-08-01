// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// route setting with models seeder connection
router.get('/', (req, res) => {
  res.render('shorten')
})


// 匯出路由模組
module.exports = router