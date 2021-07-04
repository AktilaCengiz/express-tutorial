const express = require("express");
const start = require("./utils/start");
var app = express();


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