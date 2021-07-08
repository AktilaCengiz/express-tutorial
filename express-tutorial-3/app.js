const express = require("express");
const expressLayotus = require("express-ejs-layouts");
const start = require("./utils/start");
var app = express();
var path = require("path");

//############
// express settings
//############
app.set("view engine","ejs");
app.use(expressLayotus);
app.use('/views', express.static('views'));
app.use(express.static(path.join(__dirname + '/views')));

//############
// Pages & Layouts  
//############
var layout = path.join("layouts","layout");
var home = path.join("pages","home");

//############
// HomePage  
//############
app.get("/", (req,res) => {
    return res.render(home, {
     layout: layout,
     "aktila": "helmes"
    });
});

//############
// API
//############
var kelimeler = [
    "aktila",
    "helmes",
    "venosa",
    "ahmet",
    "elif"
];

app.get("/api/kelime", (req,res) => {
    var random = Math.floor(Math.random() * kelimeler.length - 1 + 1);
    res.json({ "kelime": kelimeler[random] });
});


start(app,4000);