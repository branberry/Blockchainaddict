const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'DESKTOP-J8I4H9P',
    user : 'wowbob396',
    password : '*******',
    database : 'lifeartificer'
});

connection.connect();
connection.query
connection.query('SELECT * FROM ada_data', (error,results,fields) => {
    if (error) throw error;
    console.log(results);
});

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/hello',(req,res) => res.send('HAHAHA!'));
app.listen(3000, () => console.log('Example app listening on port 3000!'));