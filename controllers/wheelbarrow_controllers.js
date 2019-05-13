var express = require("express");
var wheelbarrow = require("../models/wheelbarrow.js");

var router = express.Router();

// import model to use db functions

var wheelbarrow = require("../models/wheelbarrow.js");

// create routes 

router.get("/", function(req, res) {
    wheelbarrow.all(function(data) {
        var hbObj = {
            rocks: data
        };
        console.log(hbObj);
        res.render("index", hbObj);
    });
});

