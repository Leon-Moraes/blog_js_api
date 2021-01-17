
const mysql = require('mysql');
const connection =  mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'pokedex'
});


connection.connect((error)=> {
    if(!error) {
        console.log("Connected");
    } else {
        console.log("Connection Failed");
    }
})

module.exports = connection; 
