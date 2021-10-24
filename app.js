// include packages and define server related variables
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')

// rocky - plateau - 48187

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files for css
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting mongoose
require('./config/mongoose')

// 引用 routes
app.use(routes)

//start and listen on the Express server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})