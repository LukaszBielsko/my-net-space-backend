const express = require("express");
const router = express.Router();

// item model - bring it here to query it etc
const Post = require("../../models/Posts.js");

// @route GET api/Posts
// @desc Get all Posts
// @access public
// router.get("/", async (_req, res) => {
//   console.log("here, here");
//   await Post.find()
//     .sort({ date: -1 })
//     .then(posts => {
//       // console.log(posts);
//       return res.json(posts);
//     });
//   // res.send('hello')
// });

//testing
const controller = require("../../controllers/PostsController");

router.get("/", controller.posts);

module.exports = router;
