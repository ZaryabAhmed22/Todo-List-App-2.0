const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Setting the view enginr to ejs
app.set("view engine", "ejs");

// Creating a global variable for  todos and work
const todos = ["eat", "sleep"];
const work = ["Project", "Homework"];

//**** Get Requests ****//
app.get("/", function (req, res) {
  //calling the getDate() function from our custom module
  const day = date.getDate();
  res.render("list", { title: day, list: todos });
});

app.get("/work", function (req, res) {
  res.render("list", { title: "Work", list: work });
});

//**** Get Requests ****//
app.post("/", function (req, res) {
  console.log(req.body);
  item = req.body.listItem;
  title = req.body.listName;

  if (title === "Work") {
    work.push(item);
    res.redirect("/work");
  } else {
    todos.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function (req, res) {
  console.log("Server live on port 3000");
});
