// current year footer
let CurrentYear = new Date(Date.now());
let year = CurrentYear.getFullYear();
document.getElementById("CurrYear").innerHTML = year;
// Sample data for products saved in local storage
let Products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem(
      "products",
      JSON.stringify([
        { Name: 'Boxing Gloves',
             Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20202103.png',
             Description:'The Everlast Prostyle 2 Boxing Glove is made from high-quality synthetic leather, ensuring long-lasting durability and performance.',
             Price: '649.99',
              Category: 'Fitness'},
        { Name: 'Spin Bike',
             Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20211731.png',
             Description:'Designed with a range of functions such as speed, time, distance and calories burnt, the Everlast Fluid Exercise Spin Bike helps to maximise fat burning while providing a fluid ride with its 10kg flywheel.',
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
        { Name: 'Dumbbell',
            Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-12%20111838.png',
            Description:'Get weight training with the Maxed hex dumbbell',
            Price: 800,
            Category: 'Weight'},
        { Name: 'Jump Rope',
            Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20212324.png',
            Description:'Counts each jump so you can keep pushing yourself with each training session, making it ideal for cardio training',
            Price: 50000,
            Category: 'Cardio'}
      ])
    );
// Display Data
let items = document.querySelector("[data-items]");
items.innerHTML = "";
if (Products) {
  // Loop through products array
  Products.forEach((Product) => {
    items.innerHTML += `
      <div class="card mx-4 mt-3 text-center" id="ProductCard">
        <img src="${Product.Image}" ">
        <div class="card-body">
          <h5 class="card-title">${Product.Name}</h5>
          <h3 class="card-text mt-2">R ${Product.Price}</h3>
          <a href="#" class="btn btn-dark mt-2" id="add-btn" onclick='addToCart(${JSON.stringify(Product)})'>Add to Cart</a>
        </div>
      </div>`;
  });
}
// Add To Cart
let emptyArray = JSON.parse(localStorage.getItem("checkout")) || [];
function addToCart(item) {
  if (item) {
    emptyArray.push(item);
    localStorage.setItem("checkout", JSON.stringify(emptyArray));
  }
}
function searchProducts() {
      let searchInput = document.getElementById("searchInput").value.toLowerCase();
      let filteredProducts = Products.filter(product => product.Name.toLowerCase().includes(searchInput) || (product.Description && product.Description.toLowerCase().includes(searchInput)));
      displayProducts(filteredProducts);
    }
    // Sort Products
    function sortProducts() {
      let sortValue = document.getElementById("sortSelect").value;
      let sortedProducts = [...Products];
      if (sortValue === "nameAsc") {
        sortedProducts.sort((a, b) => a.Name.localeCompare(b.Name));
      } else if (sortValue === "nameDesc") {
        sortedProducts.sort((a, b) => b.Name.localeCompare(a.Name));
      } else if (sortValue === "priceAsc") {
        sortedProducts.sort((a, b) => a.Price - b.Price);
      } else if (sortValue === "priceDesc") {
        sortedProducts.sort((a, b) => b.Price - a.Price);
      }
      displayProducts(sortedProducts);
    }