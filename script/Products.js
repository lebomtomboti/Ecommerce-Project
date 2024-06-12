const products = [ { Name: 'Boxing Gloves', Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20202103.png',Description:'The Everlast Prostyle 2 Boxing Glove is made from high-quality synthetic leather, ensuring long-lasting durability and performance.',Price: '649.99', Category: 'fitness'}
    ,{Name: 'Spin Bike', Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20211731.png',Description:'Designed with a range of functions such as speed, time, distance and calories burnt, the Everlast Fluid Exercise Spin Bike helps to maximise fat burning while providing a fluid ride with its 10kg flywheel.',Price: 4999.00, Category: 'Fitness'},
    {Name: 'Punching Bag', Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20212033.png',Price: 10000, Category: 'Fitness'},
    {Name: 'wheel',Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20212053.png',Description:'Strengthen your core with our exercise wheel.',Price: 1000, Category: 'Core'},
    {Name: 'Hex Dumbbell',Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-12%20111838.png',Description:'Get weight training with the Maxed hex dumbbell',Price: 800, Category: 'Weight'},
    {Name: 'Digital Counter Jump Rope',Image:'https://lebomtomboti.github.io/EcomPictures/Screenshot%202024-06-11%20212324.png',Description:'Counts each jump so you can keep pushing yourself with each training session, making it ideal for cardio training',Price: 50000, Category: 'Cardio'}]

let tbody = document.querySelector('tbody')
let btn = document.querySelector('button')
let inp = document.querySelector('#Search')
products.map(addToTable)
function addToTable(item){
    tbody.innerHTML += `
                        <tr>
                            <td>${item.Name}</td>
                            <td>${item.Image}</td>
                            <td>${item.Description}</td>
                            <td>${item.Price}</td>
                            <td>${item.Category}</td>
                        </tr>
                        ` 
}
const search = searchedProducts('name','Dumbbells')
// localStorage.setItem('Products',JSON.stringify(products))
displayData(products)