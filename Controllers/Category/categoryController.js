const mongoose = require("mongoose");
require("../../Models/CategorySchema");
const categoryModel = mongoose.model("Category");
//for catgeroy_id in categoryModel.
var counter = 0;

let getAllCatgeroy =  (req, res, next) => {
  categoryModel.find({}).then((data) => {
    const categories = data
     res.status(200).json({ data: categories });
  }).catch((err) => { 
    console.log(err)
    next(err)
  })
};

let createCategroy = async(req, res, next) => {
  const categories = await categoryModel.find({});

  if (categories.length == 0) {
        counter = 1;
  } else {
        counter = counter + 1;
  }
  const category = new categoryModel({
    id: counter,
    name: req.body.name});
  category.save();
  res.status(200).json({ data: category });
};

let upadtecatgeroy =  (req, res, next) => {
  categoryModel
    .updateOne(
      { id: req.body.id },
      { set: { name: req.body.name } },
      { new: true }
    )
    .then((data) => {
      console.log(data);
    });
  res.status(200).json({ data:"done" });
};

let deletecatgeroy = (req, res, next) => {

};

module.exports = {
  getAllCatgeroy,
  createCategroy,
  upadtecatgeroy,
  deletecatgeroy,
};
