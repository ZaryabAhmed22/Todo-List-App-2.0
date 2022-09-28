const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Setting the view enginr to ejs
app.set("view engine", "ejs");

// Creating a global variable for  todos
let todos = [];

app.get("/", function (req, res) {
  options = { weekday: "long", month: "long", day: "numeric" };
  let today = new Date();
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, todos: todos });
});

app.post("/", function (req, res) {
  console.log(req.body.todo);
  todos.push(req.body.todo);

  res.redirect("/");
});

app.listen(3000, function (req, res) {
  console.log("Server live on port 3000");
});
