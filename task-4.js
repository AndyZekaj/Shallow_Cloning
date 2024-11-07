// Task 4
// Given the array of product objects:

// Create a function called applyDiscount that takes in input an array of product objects and a discount value.
// The function should apply the discount to all the products in the array.
// The function then returns the array with the discounted prices.
// : the original array should not be modified.
// Formula to calculate a discount:
// discountedPrice = price - (price * discount / 100);

// 20% discount of 100€:
// 100 - (100 * 20 / 100) -> 100 - (200 / 100) -> 100 - 20 -> 80


// 15% discount of 70€:
// 70 - (70 * 15 / 100) -> 70 - (1050 / 100) -> 70 - 10.5 -> 59.5


const products = [
    {
      type: "t-shirt",
      price: 19,
      color: "green",
    },
    {
      type: "jeans",
      price: 27,
      color: "blue",
    },
    {
      type: "shirt",
      price: 32,
      color: "white",
    }
  ];
  
  function applyDiscount(products, discountValue) {
    
    const discountedProducts = [];
    
    for (let i = 0; i < products.length; i++) {
      
      const discountedPrice = products[i].price - (products[i].price * discountValue / 100);
          
      const discountedProduct = {
        ...products[i],            
        price: discountedPrice      
      };
      
      discountedProducts.push(discountedProduct);
    }
    
    return discountedProducts;
  }
  
  const discountedProducts = applyDiscount(products, 20);
  console.log("Original products:", products); 
  console.log("Discounted products:", discountedProducts); 
  