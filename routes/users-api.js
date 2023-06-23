/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({
        users
      });
    })
    .catch(err => {
      res
        .status(500)
        .json({
          error: err.message
        });
    });
});





// User placing in their information 

// Mulitple resturants, and theres only one resturant with information


app.get("/register", (req, res) => {

// take in user info
// bcrpyt password in the tables and have comparison function to check if they match 

  

  return res.redirect("/homePage")
});
app.post('/login', (req, res) => {




  return res.redirect("/homePage")
});


// go to app home page 
app.get("/homePage", (req, res) => {


  

  return res.redirect("resturant/:id")
});

app.get("/resturant/:id", (req, res) => {

  return res.redirect("/dishes")
})

app.get("/dishes", (req, res) => {

  return res.redirect("/dish/:id")
})


app.get("/dish/:id", (req, res) => {

  return res.redirect("/order/:id")
})

app.get("/order/:id", (req, res) => {

  return res.redirect("/user/:id")
})

app.post("/user/:id", (res, req) => {

// if statement whether user creditinals are correct 
  // insert that the orders tables 
// else client must update creditinals 
  // Error msg, update your creditinals if not updated 

  // Create another endpoint that requires patch request for user to update their password 



return res.redirect("/homePage")
  
})


module.exports = router;



// Login 
// HomePage for dishDash app - Few resturant option, get requset to resturant/:id
// Get resturant/:id for one resturant
// Get dishes(Menu), add button to add to kart 
// GET dish/id - for each individual dish 
// Get order/id (Creating an order is POST OR GET?) click on the kart and place order 
// GET USER/ID to show information 
// POST user information to update (if statement)