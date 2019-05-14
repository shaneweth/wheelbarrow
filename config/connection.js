var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "wheelbarrow_db"
});

conn.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + conn.threadId);
});

module.exports = conn;