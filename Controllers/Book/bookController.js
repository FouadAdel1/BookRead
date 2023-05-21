const mongoose = require("mongoose");
require("../../Models/BookShema");
const bookModel = mongoose.model("Book");

let getAllBooks = async (req, res, next) => {
  try {
    const books = await bookModel
      .find({})
      .populate({ path: "author_id", select: "firstname id" })
      .populate({ path: "category_id", select: "name id" });
    res.status(200).json({ data: books });
  } catch (error) {
    next(error);
  }
};

let getOneBook = async (req, res, next) => {
  try {
    const book = await bookModel
      .findOne({ id: req.params.id })
      .populate({ path: "author_id", select: "firstname id" })
      .populate({ path: "category_id", select: "name id" });
    res.status(200).json({ data: book });
  } catch (error) {
    next(error)
  }
};

let createOneBook = async (req, res, next) => {
  try {
    var counter = 0;
    const books = await bookModel.find({});
    let lastbook = await bookModel.findOne({}).sort({ id: -1 });
    if (books.length == 0) {
      counter = 1;
    } else if (lastbook.id == books.length + 1) {
      counter = lastbook.id + 1;
    } else {
      counter = books.length + 1;
    }
    const book = bookModel({
      id: counter,
      name: req.body.name,
      author_id: req.body.author_id,
      category_id: req.body.category_id,
      book_image: req.file.filename,
    });
    book.save();
    res.status(200).json({ data: book });
  } catch (error) {
    next(error);
  }
};

let updateOneBook = async(req, res, next) => {
  try {
    
    const book = await bookModel.findOneAndUpdate(
      { id: req.body.id },
      {
        name: req.body.name,
        author_id: req.body.author_id,
        category_id:req.body.category_id,
        book_image:req.file.filename
      },
      { new: true }
    );
    res.status(200).json({data:book})
  } catch (error) {
    next(error )
  }
};
let deleteOneBook = (req, res, next) => {
  try {
    bookModel.deleteOne({ id: req.body.id }).then(() => {
      res.status(200).json({message:"delete Done"})
    })
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getAllBooks,
  getOneBook,
  createOneBook,
  updateOneBook,
  deleteOneBook,
};
