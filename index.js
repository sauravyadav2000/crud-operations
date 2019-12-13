const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Importing routes
const postRoute = require("./routes/post");

app.use(postRoute);

//Connecting to database
mongoose.connect("mongodb://127.0.0.1:27017/crud-operations", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.set("useCreateIndex", true);

//Connecting to server
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
