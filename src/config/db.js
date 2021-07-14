import mysql from 'mysql';

var pool = mysql.createPool({
    connectionLimit : 10,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    options  : {"supportBigNumbers":true},
    dateStrings : true,
    charset: 'utf8mb4',
    timezone: 'utc'
});

pool.on('connection', function (connection) {
    connection.on('error', function (err) {
        connection.release();
        //https://stackoverflow.com/questions/20210522/nodejs-mysql-error-connection-lost-the-server-closed-the-connection
        if(err.code !== 'PROTOCOL_CONNECTION_LOST') {                                 
            console.log('error db')
            console.log(err)                                
        }
    }); 
});


pool.on('connection', function (connection) {
  connection.query('SET SESSION group_concat_max_len = 100000');
});

var db = (function () {
    function _query(query, params, callback) {
        let timer = new Date().getTime()
        pool.query(query, function (err, rows) {
            if(err){
                console.log("error query")
                console.log(query)
                console.log(err)
            } 
            
            let timer_end = new Date().getTime()
            if(timer_end - timer > 1000){
                console.log("slow query", query, timer_end - timer)
            }

            callback(err, rows);
        });
    }

    return {
        query: _query
    };
})();

export default db;
