const db = require("../connection");


const getAllRestaurants = () => {
  return db
    .query(`SELECT * FROM restaurants`)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


const getRestaurantsById = (id) => {
  return db
    .query(`SELECT * FROM restaurants WHERE id = $1`, [id])
    .then((data) => {
      // Check if the restaurant's id exist
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

// getAllRestaurants()
//   .then((restaurant) => {
//     console.log(restaurant);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


getRestaurantsById(3)
  .then((restaurant) => {
    console.log(restaurant);
  })
  .catch((error) => {
    console.error(error);
  });

  module.exports = {
    getAllRestaurants,
    getRestaurantsById
  };
