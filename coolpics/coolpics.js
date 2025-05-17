const button = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

button.addEventListener("click", () => {
    menu.classList.toggle("hide");
});

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
};

handleResize();
window.addEventListener("resize", handleResize);

// Gallery Pop-Up Image

const dialog = document.createElement("dialog");
const gallery = document.querySelector(".gallery");

dialog.innerHTML = '<img><button class="close-viewer">X</button>';
document.body.appendChild(dialog);

gallery.addEventListener("click", (event) => {
    const clickedImage = event.target.closest("img");
    if (clickedImage) {
        const modalImage = dialog.querySelector("img");

        modalImage.src = clickedImage.src.split("-")[0] + "-full.jpeg";
        modalImage.alt = clickedImage.alt;

        dialog.showModal();
    }
});

dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

dialog.querySelector(".close-viewer").addEventListener("click", () => {
    dialog.close();
});