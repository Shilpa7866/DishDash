const db = require("../connection");

const getAllDishes = () => {
  return db
    .query(`SELECT * FROM dishes`)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getDishesById = (id) => {
  return db
    .query(`SELECT * FROM dishes WHERE id = $1`, [id])
    .then((data) => {
      // Check if the dishes's id exist
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

// getAllDishes()
//   .then((dish) => {
//     console.log(dish);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// getDishesById(3)
//   .then((dish) => {
//     console.log(dish);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

module.exports = {
  getAllDishes,
  getDishesById,
};
