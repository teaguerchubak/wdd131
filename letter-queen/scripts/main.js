import artwork from "./gallery.mjs";


/* FOOTER ICON CHANGES */
const cartelBox = document.getElementById("cartel-box");
const cartel = document.getElementById("cartel");
const instaBox = document.getElementById("insta-box");
const insta = document.getElementById("insta");

cartelBox.addEventListener("mouseover", () => {
    cartel.src = "images/icon-big-cartel-white.png";
});

cartelBox.addEventListener("mouseout", () => {
    cartel.src = "images/icon-big-cartel.png";
});

instaBox.addEventListener("mouseover", () => {
    insta.src = "images/icon-instagram-white.png";
});

instaBox.addEventListener("mouseout", () => {
    insta.src = "images/icon-instagram.png";
});


/* GALLERY CARD CREATION */
function tagsTemplate(tags) {
    return tags.map(tag => `<p>${tag}</p>`).join(' ');
}

function artworkTemplate(item) {
    return `
        <div class="artwork-container">
            <img class="art-img" src="${item.source}" alt="${item.alt}">
            <div class="artwork-text">
                <h2 class="title">${item.title}</h2>
                <p class="year">${item.year}</p>
                <p class="type">${item.type}</p>
                <div class="tags">
                    ${tagsTemplate(item.medium)}
                </div>
            </div>
        </div>
    `
}

function generateGallery(artworkArray) {
    const container = document.querySelector(".gallery-container");

    const html = artworkArray.map(artwork => artworkTemplate(artwork)).join('');

    container.innerHTML = html;
};

function init() {
    generateGallery(artwork);
}

init();


/* GRID TOGGLE */
const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("toggle");
})


/* FILTERS */
const filterSelect = document.getElementById("filter");

filterSelect.addEventListener("change", () => {
    const filterArray = [];

    if (filterSelect.value === "all") {
        generateGallery(artwork);
    } else {
        artwork.forEach((art) => {
            if (filterSelect.value.toLocaleLowerCase() === art.type.toLocaleLowerCase()) {
                filterArray.push(art);
            }
        });
        generateGallery(filterArray);
    }
});


/* ARIA CODE */
const button = document.getElementById("mode-toggle");

button.addEventListener("click", () => {
    if (document.body.classList.contains("toggle")) {
        button.setAttribute("aria-label", "Show Descriptive Text")
    } else {
        button.setAttribute("aria-label", "Hide Descriptive Text")
    };
});