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


////////////////////////////////////////////////////////////
// Code to test functions
////////////////////////////////////////////////////////////

getAllRestaurants()
  .then((restaurant) => {
    console.log(restaurant);
  })
  .catch((error) => {
    console.error(error);
  });

  module.exports = {
    getAllRestaurants,
  };
