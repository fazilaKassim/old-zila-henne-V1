const products = [
    {
      id: 1,
      name: "1 cone",
      price: 2,
    },
    {
      id: 2,
      name: "set de 2 cones",
      price: 4,
    },
    {
      id: 3,
      name: "set de 5 cones",
      price: 8,
    },
    {
      id: 4,
      name: "set de 10 cones",
      price: 12,
    }
  ];

 



  function filterProducts(productsToFilter, priceLimit) {
    const filtered = [];
    for (let index = 0; index < productsToFilter.length; index++) {
      if (productsToFilter[index].price >= priceLimit) {
        filtered.push(productsToFilter[index]);
      }
    }
    return filtered;
  }
  
  console.log(filterProducts(products, 1000));



  const filtered1 = products.filter(function(product) {
    // filter retourne toujours true || false
    return product.price >= 1000;
  });

  


// trier le tableau par prix descendant
products.sort((prod1, prod2) => prod2.price - prod1.price);

console.log(products);



// trier le tableau par ordre d'id ascendant
products.sort(function(prod1, prod2) {
    return prod1.id - prod2.id;
  });
  
  console.log(products);





