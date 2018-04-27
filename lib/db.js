import mysql from 'mysql';

// setting up directly to .env
require('dotenv').config();

const configDb = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
};



const pool = async ()=>{
  return await mysql.createPool(configDb);
}


const testConnect = async() => {
    const status = await pool.getConnection((err, connection) => {
        console.log('aa');
    });
    return status;
};

const query = async(text) => {
    const rows = await pool.query(text);
    console.log(rows);
    
    return rows;
};

// const query = async(text) => {
//     const rows = await pool.query(text);
//     // const exec = await pool.query();
//     console.log('rowsss',rows)
//     return rows;
// };


// connection.connect(function(err){
//     if (!err) {
//         console.log("Database is connected ...");
//     } else {
//         console.log("Error connecting database ...");
//         console.log(err);
//     }
// });

// const client = new Client(configDb);
// const pool = new Pool(configDb);

// const testConnect = async() => {
//     const status = await pool
//         .connect()
//         .then(() => 'Database connected')
//         .catch(err => new Error(`Database error! ${err}`));
//     return status;
// };

/**
 * Multi Purpose Query
 */

// const query = async(text, params) => pool
//     .query(text, params)
//     .catch(err => console.log(err));

/**
  * Template Insert
  * INSERT INTO users(name, email) VALUES($1, $2)
  * @param {tableField}. users(name, email)
  * @param {tableValue}. values($1, $2)
  * @param {setValue}. [username, email, password, currentDate]
  * @param {response}. router response from express
  */

// const insertRows = async(tableField, tableValue, setValue, response) => {
//     const client = await pool.connect();
//     try {
//         await client.query('BEGIN');
//         const baseSql = `insert into ${tableField} ${tableValue}`;
//         const {rows} = await client.query(baseSql, setValue);
//         return (Object.assign({client}, rows));
//     } catch (err) {
//         // it's will rollback and send Internal Server Error into client
//         console.log(err);
//         await client.query('ROLLBACK');
//         return response.status(500).send(err);
//     } finally {
//         client.release();
//     }
// };

/**
  * Template Update
  * INSERT INTO users(name, email) VALUES($1, $2)
  * @param {rawQuery}. users SET username=($1), email=($2) WHERE...
  * @param {setValue}. [username, email, password, currentDate]
  * @param {response}. router response from express
  */

// const updateRows = async(rawQuery, setValue, response) => {
//     const client = await pool.connect();
//     try {
//         await client.query('BEGIN');
//         const baseSql = `UPDATE ${rawQuery}`;
//         console.log(baseSql);
//         const {rows} = await client.query(baseSql, setValue);
//         return (Object.assign({ client}, rows));
//     } catch (err) {
//         // it's will rollback and send Internal Server Error into client
//         console.log(err);
//         await client.query('ROLLBACK');
//         return response.status(500).send(err);
//     } finally {
//         client.release();
//     }
// };

export { pool, testConnect, query };
