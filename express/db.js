var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'china_lbsmobile_db'
});

function query(sql,callback){
    connection.query(sql, function (err,rows) {
        callback(err,rows);
        //connection.release();
    });
}

exports.query = query;