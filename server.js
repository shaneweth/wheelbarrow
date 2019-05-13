var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// DATA

var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "wheelbarrow_db"
})

var routes = require("./controllers/wheelbarrow_controllers.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("server listening on: http://localhost:" + PORT);
});
