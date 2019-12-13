const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: 30,
    min: 6
  },
  description: {
    type: String,
    required: true,
    max: 250
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
