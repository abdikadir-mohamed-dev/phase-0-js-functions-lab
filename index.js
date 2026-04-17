function calculateTax(amount) {
  let tax = amount * 0.10;
  return tax;
}
function convertToUpperCase(text) {
  return text.toUpperCase();
}
function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
function isPalindrome(word) {
  let reversed = word.split('').reverse().join('');
  
  if (word === reversed) {
    return true;
  } else {
    return false;
  }
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discount = (discountPercentage / 100) * originalPrice;
  let finalPrice = originalPrice - discount;
  return finalPrice;
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };