const mongoose = require("mongoose");
const { Schema } = mongoose;

const CatgeroySchema = Schema({
  id: { type: Number, unique: true },
  name: { type: String, required: true },
});

const Category = mongoose.model("Category", CatgeroySchema);
