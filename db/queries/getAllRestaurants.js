const db = require('../connection');

// returns all of the items posted by sellers
const getAllRestaurants = () => {
  return db
    .query(`
    SELECT id, name, thumbnail_photo, description, opening_hours, website,  phone_number, address
    FROM restaurants
    WHERE 1=1
    ORDER BY id`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getAllRestaurants
};
