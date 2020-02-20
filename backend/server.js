const express = require("express");
const mongoose = require("mongoose");
const configDB = require("./config.js");
const bodyParser = require("body-parser");

const app = express();

const posts = require("./routes/api/posts");

//body parser middleware
app.use(bodyParser.json());

// db config
const db = configDB.mongoURI;

// connect to mongoose
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// use routes
// app.use("/api/items", items);

// testing
app.get("/", (req, res) => res.send("Hello World!"));

//get posts
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server start on port: " + port));

// const path = require("path");

// check if in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }
