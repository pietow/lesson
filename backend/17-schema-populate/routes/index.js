const express = require("express");
const {Books} = require('../models/mongo')
const router = express.Router()

// getting Home page
router.get('/', (req, res)=>{
    // getting all books
    // Books.find().populate('author').then(allBooks=>{
    //    res.render('index', {books: allBooks}) 
    // }).catch(error=>{
    //     res.render('error', {error: error.message})
    // })
    // one Book example after populate
    /**
     * {
     *      title: ANY,
     *      author: {
     *          name: ANY,
     *          email: ANY,
     *          address: {
     *              country: ANY,
     *              city: ANY
     *          },
     *          phone: ANY
     *      },
     *      pages: ANY,
     *      prise: ANY,
     *      description: ANY
     *  }
     */
    Books.find().populate('author').exec((error, books)=>{
        if(error){
            res.render('error', {error: error.message}) 
        }
        res.render('index', {books: books}) 
    })
    
})

router.get('/books/:bookid', (req, res)=>{
    console.log(req.params.bookid)
    Books.findById(req.params.bookid).populate('author').then(book=>{
        res.render('book', {book: book})
    }).catch(error=>{
        res.render('error', {error: error.message})
    })
})

// For search
router.get('/search', (req, res)=>{
    //res.json(req.query.)
    // search in Books title for somthing like title
    Books.find({title: {$regex: req.query.title}}).populate('author').then(result=>{
        res.render('search', {books: result})
    }).catch(error=>{
        res.render('error', {error: error.message})
    })
})

router.get('/searchajax', (req, res)=>{
    Books.find({title: {$regex: req.query.title}}).populate('author').then(result=>{
        res.json({success: true, books: result})
    }).catch(error=>{
        res.json({success: false, error: error.message})
    })
})

module.exports = router
