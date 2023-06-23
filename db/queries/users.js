const db = require('../connection');

// Return information about users
const getUsersById = (id) => {
  return db
    .query("SELECT * FROM users WHERE id = $1", [id])
    .then((data) => {
      // Check if the user's id exist
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

// getUsersById(4)
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.error(error);
//   });




module.exports = {
  getUsersById,
};
