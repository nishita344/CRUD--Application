const mysql=require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:"learning_api",
});
connection.connect((err) => {
    if(err){
        console.error("Database connection error:", err.message);
        process.exit(1);
    }
    else{
        console.log("MySQL connected");
    }
});
module.exports = connection;