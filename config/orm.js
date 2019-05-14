var con = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryStr = "SELECT * FROM " + tableInput + ";";
        con.query(queryStr, name, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(table, col, val, cb) {
        // need to fix function
        var queryStr = "INSERT INTO " + table + " (" + col.toString() +") " + "VALUES";
        con.query(queryStr, name, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(name) {
        var queryStr = "UPDATE rocks SET ? ";
        con.query(queryStr, name, function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    } 
}




// methods to execute the MySQL commands in the controllers

// selectAll()
// insertOne()
// updateOne()

module.exports = orm;