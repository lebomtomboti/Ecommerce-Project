let cart = JSON.parse(localStorage.getItem("checkout")) || [];
let cartTable = document.getElementById("Table-data");
let cartProducts = Object.groupBy(cart, (item) => item.id);

// Display the cart
cartTable.innerHtml = " ";
if (cartProducts) {
  // Loop through products array
  for (let key in cartProducts) {
    cartTable.innerHTML += `
    
    <tr>
    <th scope="row">${cartProducts[key][0].id}</th>
    <td>${cartProducts[key][0].Description}</td>
    <td>
        <img class=" img-fluid " id="IMG" src="${
          cartProducts[key][0].imgUrl
        }" alt="${cartProducts[key][0].make}">
    </td>
    <td>R${cartProducts[key][0].amount} </td>
    <td>${cartProducts[key].length}</td>
    <td>R${cartProducts[key].length * cartProducts[key][0].amount}</td>
</tr>
         
        
        
       
        
        
    
    `;
  }
}

// clear all cart
let clearBtn = document.querySelector("#clear-btn");
function clearCart() {
  cartTable.innerHTML = " ";
  localStorage.removeItem("checkout");
}
clearBtn.addEventListener("click", clearCart);

// Total amount

// current year footer
CurrentYear = new Date(Date.now());
let year = CurrentYear.getFullYear();
document.getElementById("CurrYear").innerHTML = year;