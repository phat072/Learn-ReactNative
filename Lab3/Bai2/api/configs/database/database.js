const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "IE307"
});

const connectedDB = () => {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!");

    const sql = "SELECT * FROM tasks";
    con.query(sql, function(err, results) {
      if (err) {
        console.error("Error querying tasks:", err.message);
        return;
      }
      console.log(results);
    });
  });
};


module.exports = { con, connectedDB };
