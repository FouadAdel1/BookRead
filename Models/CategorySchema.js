const mongoose = require("mongoose");
const { Schema } = mongoose;

const CatgeroySchema = Schema({
  name: { type: String, required: true },
});

const Category = mongoose.model("Category", CatgeroySchema);
