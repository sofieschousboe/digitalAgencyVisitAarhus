// "use strict"

// /* Search function */
// function search(value) {
//     value = value.toLowerCase();
//     console.log(value);

//     const results = [];
//     for (const cloth of _clothes) {
//         const name = cloth.name.toLowerCase();

//         if (name.includes(value)) {
//             results.push(cloth);
//         }
//     }
//     console.log(results);
//     appendClothes(results);
// };






"use strict";

// // GLOBAL VARIABLES
// let _contents = [];

// /*
// Fetches json data from local file data.json
// */
// async function fetchData() {
//   const response = await fetch('../json/data.json');
//   const data = await response.json();
//   _contents = data;
//   console.log(_contents);
//   appendContent(_contents);
// }

// fetchData();

// function appendContent(contents) {
//   let htmlTemplate = "";
//   for (let content of contents) {
//     htmlTemplate += /*html*/`
//     <article>
//         <img src="${content.Files[0]}">
//         <h2>${content.Name}</h2>
//         <p>${content.MainCategory.Name}</p>
//     </article>
//     `;
//   }
//   document.querySelector('#searchResultsContainer').innerHTML = htmlTemplate;
// }

/* ADD NAVIGATION TO CONTENT PAGE/DETAIL VIEW OF SPECIFIC CONTENT */

function addNewProduct() {
  showLoader(true);

  let brand = document.querySelector('#brand').value;
  let model = document.querySelector('#model').value;
  let price = document.querySelector('#price').value;
  let img = document.querySelector('#img').value;
  const id = Date.now(); // dummy generated user id

  if (brand && model && price && img) {
    let newProduct = {
      brand: brand,
      model: model,
      price: price,
      img: img,
      status: "inStock",
      id: id
    }
    _products.push(newProduct);

    appendProducts(_products);
    navigateTo('products');
  } else {
    alert('Please fill out all fields');
  }
  showLoader(false);
}

function search(value) {
  let searchQuery = value.toLowerCase();
  let filteredProducts = [];
  for (let product of _products) {
    let model = product.model.toLowerCase();
    let brand = product.brand.toLowerCase();
    if (model.includes(searchQuery) || brand.includes(searchQuery)) {
      filteredProducts.push(product);
    }
  }
  appendProducts(filteredProducts);
}
