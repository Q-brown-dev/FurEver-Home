function darkMode() {
  document.body.classList.toggle("dark")
}

// Header
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  header.classList.add("active");

})

window.addEventListener("scroll", () => {
  setTimeout(() => {
    document.getElementById("header").classList.add("fade-out")
  }, 5000);
})



// Hero
const hero = document.getElementById("hero");
window.addEventListener("scroll", () => {
  hero.classList.add("hero-for-java");
})
//== Cart Animation==//

function openCart() {
  document.getElementById("cart").classList.add("open")
}
let cartCount = 0;
function addToCart(name, price, image) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  alert("Product added to cart")


}

let cart = [];
let total = 0;

function addToCart(name, price, image) {
  //Show the cart
  document.getElementById("cart").classList.add("open");

  //Add item to cart
  cart.push({ name, price, image });
}
function addToCart(name, price, image) {
  //Show the cart 
  document.getElementById("cart").classList.add("open");

  //Add item to cart
  cart.push({ name, price, image });
}

function closeCart() {
  document.getElementById("cart").classList.remove("open")
}

function addToCart(name, price, image) {
  document.getElementById("cart").classList.add("open");

  const cartItemsDiv = document.getElementById("cart-items");

  // Create item wrapper 
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("cart-item");

  // Create item content 
  itemDiv.innerHTML = `
      <img src="${image}" alt="${name}">
      ${name} - $${price}
      <button class="remove-btn">Remove</button>
      `;

  //Append to cart 
  cartItemsDiv.appendChild(itemDiv);

  //Update total
  total += price;
  document.getElementById("total").textContent = `Total: ₦${total}`;

  //Handle remove button 
  itemDiv.querySelector(".remove-btn").addEventListener("click", () => {
    cartItemsDiv.removeChild(itemDiv);
    total -= price;
    document.getElementById("total").textContent = `Total: $${total}`;
  });

  function addToCart(name, price, image) {
    addToCart.addEventListener('click', function (event) {
      event.preventDefault();
    })
  }
}



// Respond

// let responce = "Thank's for Your info we will get in touch soon!";
// form.addEventListener("submit", () => {

//    document.getElementById("respond").textContent = responce;
// })
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("respond").textContent = "Thank you for getting in touch! we will respond soon as Possible.";
  this.reset();
});

// Btn Up

