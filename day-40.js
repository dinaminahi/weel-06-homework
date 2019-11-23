//https://www.codewars.com/kata/promises-made-and-broken-the-misadventures-of-bob-the-highly-paid-consultant/train/javascript

function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;
  
  // Get the current user's shopping cart
  OrderAPI.getShoppingCartAsync(user).then(function(cart) {
   shoppingCart = cart;
   return shoppingCart;
  });
  
  // Also look up the ZIP code from their profile
  CustomerAPI.getProfileAsync(user).then(function(profile) {
    zipCode = profile.zipCode;
    return zipCode;
  })
  .then(() => shippingRate = calculateShipping(shoppingCart, zipCode))
  
  // Submit the order
  .then(() => OrderAPI.placeOrderAsync(shoppingCart, shippingRate))
  .then(success => orderSuccessful = success);
  
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}
