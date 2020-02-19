const express = require("express")
const books = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
//var decoded = jwt.verify(res.headers['authorization'], process.env.SECRET_KEY)
const Book = require("../models/Book")
books.use(cors())

process.env.SECRET_KEY = 'secret'

books.post('/addbook',(req, res)=>{
    const today = new Date()
    const bookData={
        title:req.body.title,
        about:req.body.about,
        author:req.body.author,
        created: today
    }

    Book.findOne({
        title: req.body.title
    })
    .then(book =>{
        if(!book){
                Book.create(bookData)
                .then(book =>{
                    res.json({status: book.title+ 'Done !'})
                })
                .catch(err =>{
                    res.send('error: '+err)
                })
            
        }else {
            res.json({ error : 'Book already exists '})
        }
    })
    .catch(err => {
        res.send('error: '+ err)
    })
})


books.get('/',(req,res)=>{
    
    Book.find({

    })
    .then(book =>{
        if(book){
                res.json(book)
            
        }else{
            res.json({error: "Book does not exist"})
        }
    })
    .catch(err =>{
        res.send('error: '+ err     )
    })
})


module.exports = books