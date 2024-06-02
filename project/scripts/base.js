document.querySelector("#currentyear").textContent = new Date().getFullYear();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



/* SHOWS PAGE */

const flyers = [
    {
        date: `2019 - April 26`,
        venue: `The Underground`,
        imageUrl: `https://live.staticflickr.com/65535/53763337503_fa9350191c_w.jpg`
    },
    {
        date: `2019 - May 17`,
        venue: `House Show`,
        imageUrl: `https://live.staticflickr.com/65535/53762235527_ea37b1c74a_w.jpg`
    },
    {
        date: `2019 - June 14`,
        venue: `The Underground`,
        imageUrl: `https://live.staticflickr.com/65535/53763468889_277aa60bf4_w.jpg`
    },
    {
        date: `2019 - July 18`,
        venue: `Other`,
        imageUrl: `https://live.staticflickr.com/65535/53762235517_ae22b0e981_w.jpg`
    },
    {
        date: `2019 - August 7`,
        venue: `The Underground`,
        imageUrl: `https://live.staticflickr.com/65535/53762235507_018cd78a17_w.jpg`
    },
    {
        date: `2019 - August 10`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763337498_3a7cd5b228_w.jpg`
    },
    {
        date: `2019 - August 23`,
        venue: `The Underground`,
        imageUrl: `https://live.staticflickr.com/65535/53763468874_d43df22e26_w.jpg`
    },
    {
        date: `2019 - October 14`,
        venue: `The Underground`,
        imageUrl: `https://live.staticflickr.com/65535/53763133451_0e180c0501_w.jpg`
    },
    {
        date: `2019 - September 29`,
        venue: `The Underground`,
        imageUrl: `https://live.staticflickr.com/65535/53763551970_018cd78a17_w.jpg`
    },
    {
        date: `2019 - December 29`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763337493_c285d5f79c_w.jpg`
    },
    {
        date: `2020 - January 24`,
        venue: `House Show`,
        imageUrl: `https://live.staticflickr.com/65535/53762235497_fcea64f822_w.jpg`
    },
    {
        date: `2020 - March 11`,
        venue: `The Beehive`,
        imageUrl: ``
    },
    {
        date: `2021 - June 21`,
        venue: `House Show`,
        imageUrl: `https://live.staticflickr.com/65535/53763133441_9ce9ff7098_w.jpg`
    },
    {
        date: `2021 - July 21`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53762235492_c88b774e5a_w.jpg`
    },
    {
        date: `2021 - August 13`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763551940_e8eec220f2_w.jpg`
    },
    {
        date: `2021 - October 16`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763133356_808a6450b1_w.jpg`
    },
    {
        date: `2021 - November 12`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763133436_cfd2252b05_w.jpg`
    },
    {
        date: `2022 - May 21`,
        venue: `Other`,
        imageUrl: `https://live.staticflickr.com/65535/53763133426_ccbfc34b5a_w.jpg`
    },
    {
        date: `2022 - July 7`,
        venue: `House Show`,
        imageUrl: `https://live.staticflickr.com/65535/53763551870_c0bf0950fc_w.jpg`
    },
    {
        date: `2022 - July 19`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763133421_3659c04966_w.jpg`
    },
    {
        date: `2023 - March 16`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763133411_615b10ce0f_w.jpg`
    },
    {
        date: `2023 - May 19`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763551915_54d4b30280_w.jpg`
    },
    {
        date: `2023 - July 13`,
        venue: `The Beehive`,
        imageUrl: ``
    },
    {
        date: `2023 - October 22`,
        venue: `House Show`,
        imageUrl: ``
    },
    {
        date: `2023 - December 16`,
        venue: `Other`,
        imageUrl: `https://live.staticflickr.com/65535/53763551880_0eb940f032_w.jpg`
    },
    {
        date: `2024 - April 9`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763551875_9a8f91d0b4_w.jpg`
    },
    {
        date: `2024 - April 14`,
        venue: `House Show`,
        imageUrl: `https://live.staticflickr.com/65535/53763337448_8096fe0c1b_w.jpg`
    },
];


const createCard = (flyerList) => {
    const box = document.querySelector(".flyers-grid");
    box.innerHTML="";
    flyerList.forEach(flyers => {
        box.innerHTML += `
        <div class="card">
            <img src="${flyers.imageUrl}" alt="${flyers.date}" loading="lazy">
        </div>`;
    })
}


createCard(flyers);