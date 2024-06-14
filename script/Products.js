let CurrentYear = new Date(Date.now());
let year = CurrentYear.getFullYear();
document.getElementById("CurrYear").innerHTML = year;

let Products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem(
      "products",
      JSON.stringify([
        { Name: 'Boxing Gloves',
             Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20202103.png',
             Description:'The Everlast Prostyle 2 Boxing Glove is made from high-quality synthetic leather.',
             Price: '649.99',
              Category: 'Fitness'},
        { Name: 'Spin Bike',
             Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20211731.png',
             Description:'Designed with a range of functions such as speed, time, distance and calories burnt.',
             Price: 4999.00,
              Category: 'Fitness'},
        { Name: 'Punching Bag', 
            Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20212033.png',
            Price: 10000, 
            Category: 'Fitness'},
        { Name: 'wheel',
            Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20212053.png',
            Description:'Strengthen your core with our exercise wheel.',
            Price: 1000, 
            Category: 'Fitness'},
        { Name: 'Hex Dumbbell',
            Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-12%20111838.png',
            Description:'Get weight training with the Maxed hex dumbbell',
            Price: 800, 
            Category: 'Weight'},
        { Name: 'Digital Counter Jump Rope',
            Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20212324.png',
            Description:'Counts each jump so you can keep pushing yourself with each training session.',
            Price: 50000, 
            Category: 'Fitness'}
      ])
    );

let items = document.querySelector("[data-items]");
items.innerHTML = "";
if (Products) {
  
  Products.forEach((Product) => {
    items.innerHTML += `
      <div class="card mx-4 mt-3 text-center" id="ProductCard">
        <img src="${Product.Image}" class="card-img-top align-self-center img-fluid" alt="${Product.Name}">
        <div class="card-body">
          <h5 class="card-title">${Product.Name}</h5>
          <p class="card-text">${Product.Description ? Product.Description : ''}</p>
          <h3 class="card-text mt-2">R ${Product.Price}</h3>
          <a href="#" class="btn btn-dark mt-2" id="add-btn" onclick='addToCart(${JSON.stringify(Product)})'>Add to Cart</a>
        </div>
      </div>`;
  });
}

let emptyArray = JSON.parse(localStorage.getItem("checkout")) || [];
function addToCart(item) {
  if (item) {
    emptyArray.push(item);
    localStorage.setItem("checkout", JSON.stringify(emptyArray));
  }
}