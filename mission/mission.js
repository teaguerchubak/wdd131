const bodyClass = document.getElementById("body");
const themeSelector = document.getElementById("theme-select");

themeSelector.addEventListener("change", () => {
    const selection = themeSelector.value;
    
    if (selection === "light") {
        bodyClass.classList.remove("dark")
        document.getElementById("logo").src = "logo.webp";
    }
    else if (selection === "dark") {
        bodyClass.classList.add("dark");
        document.getElementById("logo").src = "logo-dark.png";
    }
});