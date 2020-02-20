const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create schema
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = Post = mongoose.model("post", postSchema);
