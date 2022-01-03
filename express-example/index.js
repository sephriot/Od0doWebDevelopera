const express = require('express');
const mysql = require('mysql2')
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    port: 13306,
    database: 'sephcode',
    user: 'sephcode',
    password: 'sephcode'
})

app.get('/list', (req, response) => {

    db.query('SELECT * FROM `users`', (err, res) => {
        if(err) {
            console.error(err)
            throw err
        }
        response.send(res)
    })
});

app.get('/', (req, response) => {

    db.query("INSERT INTO `users` SET name=?;", [req.query.name],
        (err, res) => {
        if(err) {
            console.error(err)
            throw err
        }
        response.send({"status": "OK"})
    })
});

app.delete('/', (req, response) => {

    console.log("ID:" + req.query.id)
    db.query("DELETE FROM `users` WHERE id=?;", [req.query.id],
        (err, res) => {
            console.log(res)
            if(err) {
                console.error(err)
                throw err
            }
            response.send({"status": "DELETED OK"})
        })
});

app.listen(port, () => {
    console.log(`Server dziala na porcie http://localhost:${port}`);
})
