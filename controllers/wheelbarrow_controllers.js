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

// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var rock = require('../models/wheelbarrow.js');

// Create the routes and associated logic
router.get('/', function(req, res) {
  rock.selectAll(function(data) {
    var hbsObject = {
      rocks: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/rocks', function(req, res) {
  burger.insertOne([
    'rock_name'
  ], [
    req.body.rock_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/rocks/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  rock.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;