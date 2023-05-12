var connection = require('../database/connection')

exports.headerRender = (req,res) => {
    res.render('header');

}

exports.homeRender = (req,res) => {
    
  const myData = {
    description: "This is my website description.",
  };
  // create a query to get data from the 'users' table
  const sql = "SELECT * FROM jenis_paket";

  // execute the query
  connection.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {
      //console.log(results); //💢just to make sure the code is works!💢
      res.render("home", {
        jenisPaket: results,
      });
    }
  });
    // res.render('home');
}