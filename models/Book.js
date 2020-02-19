const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookSchema = new Schema({
    title:{
        type: String
    },about:{
        type: String
    },author:{
        type: String,
        required: true
    },date:{
        type: Date,
        default:Date.now
    }
})

module.exports = Book = mongoose.model('books',BookSchema)