const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 5000

//DB config
const db = require('./condif/keys').MongoURI

//Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...')
    )
    .catch(err => console.log(err))

//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

//Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

app.listen(PORT, console.log(`Server started on ${PORT}`))


