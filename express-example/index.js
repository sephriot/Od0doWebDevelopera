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

app.get('/', (req, response) => {

    db.query('SELECT * FROM `users`', (err, res) => {
        if(err) {
            console.error(err)
            throw err
        }
        response.send(res)
    })
});

app.listen(port, () => {
    console.log(`Server dziala na porcie http://localhost:${port}`);
})
