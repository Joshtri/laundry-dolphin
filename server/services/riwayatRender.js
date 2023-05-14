var connection = require('../database/connection')


exports.riwayatRender = (req,res) => {
    
    const myData = {
      description: "This is my website description.",
    };
    // create a query to get data from the 'users' table
    const sql = "SELECT * FROM transaksi";
  
    // execute the query
    connection.query(sql, (err, results) => {
      if (err) {
        throw err;
      } else {
        //console.log(results); //💢just to make sure the code is works!💢
        res.render("riwayat_order", {
          orders: results,
          errorMessage: null
        });
      }
    });
      // res.render('home');
  }