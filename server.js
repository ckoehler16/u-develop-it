const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // my MySQL username,
        user: 'root',
        // my MySQL password
        password: 'lola',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Catchall route; Default response for any other request (Not Found) ** place above 'Listen'
app.use((req, res) => {
    res.status(404).end();
});

// always at the bottom of server.js
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});