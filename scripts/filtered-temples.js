const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Memphis Tennessee",
        location: "Bartlett, Tennessee, United States",
        dedicated: "2000, April, 23",
        area: 10890,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/memphis-tennessee/400x250/1-Memphis-Temple-2229728.jpg"
    },
    {
        templeName: "Lubbock Texas",
        location: "Lubbock, Texas, United States",
        dedicated: "2002, April, 21",
        area: 16498,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lubbock-texas/400x250/lubbock-temple-lds-126691-wallpaper.jpg"
    },
    {
        templeName: "Toronto Ontario",
        location: "Brampton, Ontario, Canada",
        dedicated: "1990, August, 25",
        area: 57982,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/toronto-ontario/400x250/toronto-temple-lds-854102-wallpaper.jpg"
    }
];


const home = document.querySelector("#home");
home.addEventListener("click", () => {
    createCard(temples);
    document.querySelector(".buttonheading").textContent = "Home";
})

const old = document.querySelector("#old");
old.addEventListener("click", () => {
    createCard(temples.filter(temple => Date(temple.dedicated).getFullYear() < 1900));
    document.querySelector(".buttonheading").textContent = "Old";
})

const news = document.querySelector("#news");
news.addEventListener("click", () => {
    createCard(temples.filter(temple => Date(temple.dedicated).getFullYear() > 2000));
    document.querySelector(".buttonheading").textContent = "New";
})

const large = document.querySelector("#large");
large.addEventListener("click", () => {
    createCard(temples.filter(temple => temple.area > 90000));
    document.querySelector(".buttonheading").textContent = "Large";
})

const small = document.querySelector("#small");
small.addEventListener("click", () => {
    createCard(temples.filter(temple => temple.area < 10000));
    document.querySelector(".buttonheading").textContent = "Small";
})



const createCard = (templeList) => {
    const box = document.querySelector(".temple-grid");
    box.innerHTML="";
    templeList.forEach(temple => {
        box.innerHTML += `
        <div class="card">
            <h3>${temple.templeName}</h3>
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Area:</span> ${temple.area}</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
        </div>`;
    })
}


makeCards(temples);