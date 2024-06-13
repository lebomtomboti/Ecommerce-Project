let Products = JSON.parse(localStorage.getItem("products")) || [];
let ProductsTable = document.getElementById("Products-data");
let allProducts = Object.groupBy(Products, (item) => item.id);

// Display the cart
ProductsTable.innerHtml = " ";
if (allProducts) {
  // Loop through products array
  for (let key in allProducts) {
    ProductsTable.innerHTML += `
    
    <tr>
    <th scope="row">${allProducts[key][0].id}</th>
    <td>${allProducts[key][0].Description}</td>
    <td>
        <img class=" img-fluid " id="IMG" src="${allProducts[key][0].imgUrl}" alt="${allProducts[key][0].make}">
    </td>
    <td>R${allProducts[key][0].amount} </td>
    <td class=" border-0 bg-black">    
<div class="   mt-md-0 mb-4 text-center "> 
<button type="button" class="btn btn-dark mt-5  " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit</button>
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-dark">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Product ID:</label>
            <textarea class="form-control" id="message-text" ></textarea></textarea>
          </div>
           <div class="mb-3">
            <label for="message-text" class="col-form-label">Product Description:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Product imgUrl:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
         
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Product Price:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save Changes</button>
      </div>
    </div>
  </div>


</td>
<td class=" border-0 bg-black">> <button class="btn btn-dark my-4 my-md-5 " type="button"aria-expanded="false" id="delete-btn">
Delete
</button></td>

  
</tr>
         
        
        
       
        
        
    
    `;
  }
}

// Sort by Product Price
let sortBtn = document.getElementById("sort-btn");
sortBtn.addEventListener("click", () => {
  let sortedItems = Products.sort((arg1, arg2) => {
    if (+arg1.amount < +arg2.amount) {
      return -1;
    } else if (arg1.amount > arg2.amount) {
      return 1;
    } else {
      return 0;
    }
  });
  ProductsTable.innerHtml = " ";
  if (sortedItems) {
    ProductsTable.innerHTML = " ";
    sortedItems.forEach((sortedItems) => {
      ProductsTable.innerHTML += `
      
      <tr>
      <th scope="row">${sortedItems.id}</th>
      <td>${sortedItems.Description}</td>
      <td>
          <img class=" img-fluid " id="IMG" src="${sortedItems.imgUrl}" alt="${sortedItems.make}">
      </td>
      <td>R${sortedItems.amount} </td>
      <td class=" border-0 bg-black">    
  <div class="   mt-md-0 mb-4 text-center "> 
  <button type="button" class="btn btn-dark mt-5  " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit</button>
  </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Product ID:</label>
              <textarea class="form-control" id="message-text" "></textarea>
            </div>
             <div class="mb-3">
              <label for="message-text" class="col-form-label">Product Description:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Product imgUrl:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
           
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Product Price:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  
  
  </td>
  <td class=" border-0 bg-black">> <button class="btn btn-dark my-4 my-md-5 " type="button"aria-expanded="false" id="delete-btn">
  Delete
  </button></td>
  
    
  </tr>
           
          
          
         
          
          
      
      `;
    });
  }
});

// Add Product
let addProducts = document.getElementById("Add-btn");
function newProducts() {
  let description = document.getElementById("newDec").value;
  let img = document.getElementById("newImg").value;
  let Price = document.getElementById("newPrice").value;

  let obj = {
    id: Products.length + 1,
    Description: description,
    imgUrl: img,
    amount: Price,
  };

  Products.push(obj);
  localStorage.setItem("products", JSON.stringify(Products));
  ProductsTable.innerHtml = " ";
  if (Products) {
    // Loop through products array
    for (let key in Products) {
      ProductsTable.innerHTML += `
    
    <tr>
    <th scope="row">${Products[key][0].id}</th>
    <td>${Products[key][0].Description}</td>
    <td>
        <img class=" img-fluid " id="IMG" src="${Products[key][0].imgUrl}" alt="${allProducts[key][0].make}">
    </td>
    <td>R${Products[key][0].amount} </td>
    <td class=" border-0 bg-black">    
<div class="   mt-md-0 mb-4 text-center "> 
<button type="button" class="btn btn-dark mt-5  " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit</button>
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-dark">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Product ID:</label>
            <textarea class="form-control" id="message-text" ></textarea></textarea>
          </div>
           <div class="mb-3">
            <label for="message-text" class="col-form-label">Product Description:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Product imgUrl:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
         
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Product Price:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save Changes</button>
      </div>
    </div>
  </div>


</td>
<td class=" border-0 bg-black">> <button class="btn btn-dark my-4 my-md-5 " type="button"aria-expanded="false" id="delete-btn">
Delete
</button></td>

  
</tr>
         
        
        
       
        
        
    
    `;
    }
  }
}
addProducts.addEventListener("click", newProducts);

// current year footer
CurrentYear = new Date(Date.now());
let year = CurrentYear.getFullYear();
document.getElementById("CurrYear").innerHTML = year;