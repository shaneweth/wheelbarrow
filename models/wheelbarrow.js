const orm = require("../config/orm");

// call the ORM functions in order to move the rocks

var wheelbarrow = {
    selectAll: function (cb) {
        orm.selectAll("rocks", function (res) {
            cb(res);
        });
    },

    insertOne: function (col, val, cb) {
        orm.insertOne("rocks", col, val, function(res){
            cb(res);
        })
    }

}