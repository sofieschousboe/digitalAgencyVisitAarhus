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
let _contents = [];

/*
Fetches json data from local file data.json
*/
async function fetchData() {
  const response = await fetch('../json/data.json');
  const data = await response.json();
  _contents = data;
  console.log(_contents);
}

fetchData();

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


/* Search function */
function search(value) {
    value = value.toLowerCase();
    console.log(value);

    const results = [];
    for (const content of _contents) {
        const name = content.Name.toLowerCase();

        if (name.includes(value)) {
            results.push(content);
        }
    }
    console.log(results);
    // appendContent(results);
    let htmlTemplate = "";
    for (let result of results) {
        htmlTemplate += /*html*/`
        <article>
            <img src="../img/museums.jpg"> <!-- Kan ikke fecthe kun det første billede fra hvert objekt i data.json. Forsøgte med mange forskellige ting, bl.a. med stien result.Files[0].Uri -->
            <h2>${result.Name}</h2>
            <p>${result.MainCategory.Name}</p>
        </article>
        `;
    }
    document.querySelector('#searchResultsContainer').innerHTML = htmlTemplate;
};