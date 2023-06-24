const db = require("../connection");

const getOrdersById = (id) => {
  return db
    .query(
      `
      SELECT orders.*,
      SUM(dishes.price * order_dishes.quantity) AS total
      FROM orders
      JOIN order_dishes ON order_dishes.order_id = orders.id
      JOIN dishes ON dishes.id = order_dishes.dish_id
      WHERE orders.id = $1
      GROUP BY orders.id`,
      [id]
    )
    .then((data) => {
      // Check if the orders's id exist
      if (data.rows.length > 0) {
        const order = data.rows[0];
        order.total = `$${parseFloat(order.total / 100).toFixed(2)}`;
        delete order.total_price;
        return order;
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

// getOrdersById(2)
//   .then((order) => {
//     console.log(order);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

module.exports = {
  getOrdersById,
};
