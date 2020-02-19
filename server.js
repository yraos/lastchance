var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.port || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
const mongoURI ='mongodb://localhost:27017/lastchance'

mongoose
    .connect(mongoURI,{ userNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

var Users = require('./routes/Users')
var Books = require('./routes/Books')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', Users)
app.use('/books', Books)

app.listen(port, ()=>{
    console.log("server is running on port: "+port)
})