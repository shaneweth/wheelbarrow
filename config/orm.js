var con = require("./connection.js");

var orm = {
    selectAll: function(name) {
        var queryStr = "SELECT * FROM ?";
        con.query(queryStr, name, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(name) {
        var queryStr = "INSERT INTO rocks (name) VALUES ?";
        con.query(queryStr, name, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(name) {
        var queryStr = "UPDATE rocks SET ? "
    } 
}




// methods to execute the MySQL commands in the controllers

// selectAll()
// insertOne()
// updateOne()

module.exports = orm;