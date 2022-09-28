const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Setting the view enginr to ejs
app.set("view engine", "ejs");

// Creating a global variable for  todos and work
let todos = ["eat", "sleep"];
let work = ["Project", "Homework"];

//**** Get Requests ****//
app.get("/", function (req, res) {
  options = { weekday: "long", month: "long", day: "numeric" };
  let today = new Date();
  let day = today.toLocaleDateString("en-US", options);

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
