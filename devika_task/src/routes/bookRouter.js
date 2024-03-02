const express = require('express');
const logger = require('../middleware/logger');
const bookRouter = express.Router()



const books = [];

bookRouter.post('/', logger,(req, res) => {
    console.log(req.body);
    const { title, author, year } = req.body;
    const newBook = {
      id: books.length + 1, 
      title,
      author,
      year,
    };
    books.push(newBook);
    return res.status(200).json({
        message:'book added',
        data:newBook
    });
  });

  bookRouter.get('/', logger,(req, res) => {
    return res.status(200).json({
        message:'book data',
        data:books
    });
  });

  bookRouter.get('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const foundBook = books.find((book) => book.id === bookId);
    if (foundBook) {
        return res.status(200).json({
            message:'book data',
            data:foundBook
        });
    } else {
      return res.status(404).json({ 
        message: 'Book not found' 
    });
    }
  });

  bookRouter.put('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author, year } = req.body;
    const updatedBook = books.find((book) => book.id === bookId);
    if (updatedBook) {
      updatedBook.title = title;
      updatedBook.author = author;
      updatedBook.year = year;
     return res.status(200).json({
        message:'book data updated',
        data : updatedBook
    });
    } else {
     return res.status(404).json({ 
        message: 'Book not found' 
    });
    }
  });


  bookRouter.delete('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex((book) => book.id === bookId);
    if (index !== -1) {
      books.splice(index, 1);
      res.json({ message: 'Book deleted successfully' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  });


module.exports = bookRouter