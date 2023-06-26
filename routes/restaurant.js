const express = require('express');
const router  = express.Router();
const { getAllRestaurants } = require('../db/queries/restaurants');

// GET/restaurant to list all restaurants
router.get('/', (req, res) => {
  const id = req.params.id;
  const user = req.session.user;
  getAllRestaurants()
    .then((items) => {
      console.log(items);
      //const templateVars = {item:item, user};
      //res.render('item', templateVars);
      //return item.rows;
      res.json({items});
      return;
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;



