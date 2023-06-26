const express = require('express');
const router  = express.Router();
const { getAllRestaurants } = require('../db/queries/getAllRestaurants');
 
router.get('/', (req, res) => {
  const user = req.session.user;

  // when user not logged in, they see featured items but they can't like items
  getAllRestaurants()
    .then((items) => {
      if (!user) {
        res.json({items});
        return;
      }       
    })
    .catch((err) => {
      next(err);
    });
});
 

  
module.exports = router;
