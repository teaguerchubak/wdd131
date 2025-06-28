import recipes from "./recipes.mjs";

function randNum(num) {
    return Math.floor(Math.random() * num);
}

function randRecipe() {
    const choice = randNum(recipes.length);
    return recipes[choice];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<p>${tag}</p>`).join(' ');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img"
    aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        };
    }

    html += `</span>`;
    return html;
}

function recipeTemplate(item) {
    return `
        <div class="recipe-container">
        <img class="recipe-img" src="${item.image}">
        <div class="recipe-text">
            <div class="tags">
                ${tagsTemplate(item.tags)}
            </div>
            <h2 class="recipe-name">${item.name}</h2>
            ${ratingTemplate(item.rating)}
            <p class="description">${item.description}</p>
        </div>
        </div>
    `
}

function renderRecipes(recipeList) {
    const container = document.querySelector(".recipe-main");

    const html = recipeList.map(recipe => recipeTemplate(recipe)).join('');

    container.innerHTML = html;
};

function init() {
    const recipe = randRecipe();
    renderRecipes([recipe]);
}

init();


// SEARCH FILTER FUNCTIONS //

function filterRecipes(query) {
    const filterArray = [];

    recipes.forEach((recipe) => {
        if (recipe.name.toLowerCase().includes(query) ||
            recipe.tags.find((item) => item.toLowerCase().includes(query)) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.recipeIngredient.find((item) => item.toLowerCase().includes(query))) {
        filterArray.push(recipe);
        }
    });

    filterArray.sort((a, b) => a.name.localeCompare(b.name));

    renderRecipes(filterArray);
}

document.querySelector(".search").addEventListener("click", function(e) {
    e.preventDefault();
    const input = document.querySelector(".search-input").value.toLowerCase();
    filterRecipes(input);
});

document.querySelector(".search-container").addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.querySelector(".search-input").value.toLowerCase();
    filterRecipes(input);
});