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
        <img class="recipe-img" src="${item.image}">
        <div class="recipe-text">
            <div class="tags">
                ${tagsTemplate(item.tags)}
            </div>
            <h2 class="recipe-name">${item.name}</h2>
            ${ratingTemplate(item.rating)}
            <p class="description">${item.description}</p>
        </div>
    `
}

function renderRecipes(recipeList) {
    const container = document.querySelector(".recipe-container");

    const html = recipeList.map(recipe => recipeTemplate(recipe)).join('');

    container.innerHTML = html;
};

function init() {
    const recipe = randRecipe();
    renderRecipes([recipe]);
}

init();