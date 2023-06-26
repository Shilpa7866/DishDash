// typewriter effect for text on top of banner image
var app = document.getElementById("typewriter");

const typed = new Typewriter('#typewriter', {
  // strings: ['Order Fresh Food',  'From DishDash'],
  autoStart: true,
  // pauseFor: 850,
  loop: true,
  typeSpeed: 25,
  cursor: ""
});

typed
  .typeString("Order Fresh Food")
  .pauseFor(250)
  .deleteChars(16)  
  .typeString("From DishDash")
  .pauseFor(250)
  .deleteChars(13)
  .typeString("<div><img src='https://github.com/NacarateJ/DishDash/blob/DishDash_Seeds/public/thumbnail_photo/DishDash.png?raw=true'></img></div>")
  .pauseFor(500)
  .start();

 
// adds a new item on homepage
// if user is logged in and has favourited the item, it will have a red heart
const createItemComponent = (item, itemsFavId) => {
  return $(`<article onclick="fetchItem(${item.id})" class="item_listing btn">

  <section class="item_listing_header">
    ${imageOpacity(item.thumbnail_photo)}
  </section>

  <section class="item_listing_middle">
   ${soldBanner(item.website)}
  </section> 
 
  <section class="item_listing_footer"> 
    <div class="info">
      <h5 class="item_title">${item.name}</h5>
      <h6 class="item_location">${item.address}</h6>
    </div>
  </section>

  </article>`)

}

// tells user if the restaurant has website
const soldBanner = (website) => { 
    return  `<div class="unsold_banner">
        <h3 class="item_website">${item.website}</h3>
    </div>`
   
}

// 
const imageOpacity = (thumbnail_photo) => {   
    return `<div class="img_container">
    <img class="img_sold" src="${item.thumbnail_photo}?raw=true" alt="restaurant_photo">
  </div>`  
   
}


// loops through list of hotels from database and creates a new article element which is prepended to the hotel-listings class
const renderFeaturedItems = (items, itemsFavId) => {
  for (item of items) {    
    const $itemComponent = createItemComponent(item, itemsFavId)
    $(".item_listings").prepend($itemComponent)
  }
}

// defined a new variable to pass through Ajax request in jQuery function
let restaurantItems;
 

$(document).ready(function () {
  $.ajax({
    method: "get",
    url: "/restaurant",
    type: "application/json",
    success: function(data) {
      // assigned variable to restaurantItems which
      restaurantItems = data.items        
      // if user is logged in, they are able to favourite items
      const itemsFavId = [];
      renderFeaturedItems(restaurantItems, itemsFavId); 

    }
  })
})
