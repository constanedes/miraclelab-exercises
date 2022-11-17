const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234567890',
    database: 'sakila',
    connectionLimit: 10
});


const getData = async () => {
    const [rows] = await connection.query('SELECT * FROM `actor` WHERE `actor_id` = 1');
    return rows;
}

const printData = async () => {
    const data = await getData();
    console.log(data);
}

printData();
