

/* Search function */
function search(value) {
    value = value.toLowerCase();
    console.log(value);

    const results = [];
    for (const cloth of _clothes) {
        const name = cloth.name.toLowerCase();

        if (name.includes(value)) {
            results.push(cloth);
        }
    }
    console.log(results);
    appendClothes(results);
};