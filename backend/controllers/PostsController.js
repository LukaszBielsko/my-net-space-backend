// const Post = require("../models/Posts");

exports.posts = async function(req, res) {
  await Post.find()
    .sort({ date: -1 })
    .then(posts => {
      console.log(posts);
      return res.json(posts);
    });
};
