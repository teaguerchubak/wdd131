const form = document.querySelector(".form");

function LoadItems() {

    const products = [
        {
            id: "fc-1888",
            name: "flux-capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];
    
    const productName = document.getElementById("product-name");
    
    products.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        productName.appendChild(option);
    });
}

const counter = document.querySelector(".counter");

document.addEventListener("DOMContentLoaded", function () {
    const pathname = window.location.pathname;
  
    if (pathname.includes("form.html")) {
      createOptions();
    } else if (pathname.includes("review.html")) {
      reviewCounter ++;
      counter.textContent = reviewCounter;
      localStorage.setItem("reviews", reviewCounter);
    }
  });

