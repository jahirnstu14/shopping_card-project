const buttons = document.getElementsByTagName("button");

function updateTotal() {
  const basePrice = 1299;
  const memoryCost = parseInt(
    document.getElementById("memory-cost").textContent
  );
  const storageCost = parseInt(
    document.getElementById("storage-cost").textContent
  );
  const deliveryCost = parseInt(
    document.getElementById("delivery-cost").textContent
  );
  return basePrice + memoryCost + storageCost + deliveryCost;
}


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (buttons[i].id === "8gb-memory") {
      customizationPrice("memory-cost", 0);
    } else if (buttons[i].id === "16gb-memory") {
      customizationPrice("memory-cost", 150);
    } else if (buttons[i].id === "256gb-storage") {
      customizationPrice("storage-cost", 0);
    } else if (buttons[i].id === "512gb-storage") {
      customizationPrice("storage-cost", 100);
    } else if (buttons[i].id === "1tb-storage") {
      customizationPrice("storage-cost", 200);
    } else if (buttons[i].id === "late-delivery") {
      customizationPrice("delivery-cost", 0);
    } else if (buttons[i].id === "early-delivery") {
      customizationPrice("delivery-cost", 20);
    } else {
      promocode();
    }
  });
}

function customizationPrice(id, cost) {
  const now = document.getElementById(id);
  now.textContent = cost;
  const totalCost = updateTotal();
  const totalPrice = document.getElementById("total-price");
  totalPrice.textContent = totalCost;
}


function promocode() {
  const inputField = document.getElementById("input-field");
  const promoCode = inputField.value.trim(); // Get the entered promo code
  const totalPriceElement = document.getElementById("total-price");
  const userPaymentElement = document.getElementById("user-payment");

  // Check if the entered promo code is "Ostad"
  if (promoCode === "Ostad") {
    const totalCost = updateTotal(); // Calculate the total cost
    const discountedPrice = totalCost * 0.9; // Apply a 10% discount
    totalPriceElement.textContent = discountedPrice.toFixed(2); // Update the total price
    userPaymentElement.textContent = discountedPrice.toFixed(2); // Update user payment display
    alert("Promo code applied successfully! 10% discount applied.");
  } else {
    alert("Invalid promo code! Please try again.");
  }

  // Clear the input field
  inputField.value = "";
}

