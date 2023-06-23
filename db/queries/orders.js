const db = require("../connection");

const getOrdersById = (id) => {
  return db
    .query(`SELECT * FROM orders WHERE id = $1`, [id])
    .then((data) => {
      // Check if the orders's id exist
      if (data.rows.length > 0) {
        return data.rows[0];
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

////////////////////////////////////////////////////////////
// Code to test functions
////////////////////////////////////////////////////////////

// getOrdersById(1)
//   .then((order) => {
//     console.log(order);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

module.exports = {
  getOrdersById,
};
