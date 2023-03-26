
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Initialize variables
var cartItems = [];
var cartTotal = 0;
var cartItemsElement = document.getElementById("cart-items");
var cartTotalElement = document.getElementById("cart-total");

// Add event listeners to all add-to-cart buttons
var addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var itemName = button.dataset.name;
    var itemPrice = Number(button.dataset.price);
    var cartItem = { name: itemName, price: itemPrice };
    cartItems.push(cartItem);
    updateCart();
  });
});

// Update the shopping cart
function updateCart() {
  // Clear cart items element
  cartItemsElement.innerHTML = "";
  
  // Add each item to cart items element
  cartItems.forEach(function(item, index) {
    var itemElement = document.createElement("li");
    itemElement.textContent = item.name + " - $" + item.price.toFixed(2);
    
    // Add remove button
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn"); 
    removeButton.addEventListener("click", function() {
      cartItems.splice(index, 1);
      updateCart();
    });
    
    itemElement.appendChild(removeButton);
    cartItemsElement.appendChild(itemElement);
  });
  
  // Calculate cart total
  cartTotal = cartItems.reduce(function(total, item) {
    return total + item.price;
  }, 0);
  
  // Update cart total element
  cartTotalElement.textContent = cartTotal.toFixed(2);
}
const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", function() {
  // Call checkout function
  checkout();
});

function checkout() {
  // Checkout alertbox
  alert("Thank you for shopping!");
}
