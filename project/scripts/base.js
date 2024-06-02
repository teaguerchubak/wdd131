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
        imageUrl: `https://live.staticflickr.com/65535/53763337503_fa9350191c_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763337503_f192639231_o.jpg`
    },
    {
        date: `2019 - May 17`,
        venue: `House Show`,
        imageUrl: `https://live.staticflickr.com/65535/53762235527_ea37b1c74a_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53762235527_9880f7d3a5_o.jpg`
    },
    {
        date: `2019 - June 14`,
        venue: `The Underground`,
        imageUrl: `https://live.staticflickr.com/65535/53763468889_277aa60bf4_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763468889_0d54f9508b_o.jpg`
    },
    {
        date: `2019 - July 18`,
        venue: `Other`,
        imageUrl: `https://live.staticflickr.com/65535/53762235517_ae22b0e981_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53762235517_abb3de0760_o.jpg`
    },
    {
        date: `2019 - August 7`,
        venue: `The Underground`,
        imageUrl: `https://live.staticflickr.com/65535/53762235507_018cd78a17_w.jpg`,
        imageUrl: `https://live.staticflickr.com/65535/53762235507_ec972f821d_o.jpg`
    },
    {
        date: `2019 - August 10`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763337498_3a7cd5b228_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763337498_44a74a312c_o.jpg`
    },
    {
        date: `2019 - August 23`,
        venue: `The Underground`,
        imageUrl: `https://live.staticflickr.com/65535/53763468874_d43df22e26_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763468874_81f1e6b0f1_o.jpg`
    },
    {
        date: `2019 - October 14`,
        venue: `The Underground`,
        imageUrl: `https://live.staticflickr.com/65535/53763133451_0e180c0501_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763133451_2c24b730c1_o.jpg`
    },
    {
        date: `2019 - September 29`,
        venue: `The Underground`,
        imageUrl: `https://live.staticflickr.com/65535/53763551970_018cd78a17_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763551970_589ea1e435_o.jpg`
    },
    {
        date: `2019 - December 29`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763337493_c285d5f79c_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763337493_2d727ba05e_o.jpg`
    },
    {
        date: `2020 - January 24`,
        venue: `House Show`,
        imageUrl: `https://live.staticflickr.com/65535/53762235497_fcea64f822_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53762235497_00b2efdd38_o.jpg`
    },
    {
        date: `2020 - March 11`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763912387_033307e3ce_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763912387_7d791f1594_o.jpg`
    },
    {
        date: `2021 - June 21`,
        venue: `House Show`,
        imageUrl: `https://live.staticflickr.com/65535/53763133441_9ce9ff7098_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763133441_91dee05d18_o.jpg`
    },
    {
        date: `2021 - July 21`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53762235492_c88b774e5a_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53762235492_b781b44662_o.jpg`
    },
    {
        date: `2021 - August 13`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763551940_e8eec220f2_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763551940_4b4e631fdf_o.jpg`
    },
    {
        date: `2021 - October 16`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763133356_808a6450b1_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763133356_b92d6e9b9d_o.jpg`
    },
    {
        date: `2021 - November 12`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763133436_cfd2252b05_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763133436_40b2c1ebf4_o.jpg`
    },
    {
        date: `2022 - May 21`,
        venue: `Other`,
        imageUrl: `https://live.staticflickr.com/65535/53763133426_ccbfc34b5a_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763133426_f8ba44b02f_o.jpg`
    },
    {
        date: `2022 - July 7`,
        venue: `House Show`,
        imageUrl: `https://live.staticflickr.com/65535/53763551870_c0bf0950fc_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763551870_442d964414_o.jpg`
    },
    {
        date: `2022 - July 19`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763133421_3659c04966_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763133421_95cd6a884a_o.jpg`
    },
    {
        date: `2023 - February 4`,
        venue: `House Show`,
        imageUrl: `https://live.staticflickr.com/65535/53763551920_038c68151a_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763551920_880d057fa7_o.jpg`
    },
    {
        date: `2023 - March 16`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763133411_615b10ce0f_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763133411_612c40dde9_o.jpg`
    },
    {
        date: `2023 - May 19`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763551915_54d4b30280_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763551915_a198fdff04_o.jpg`
    },
    {
        date: `2023 - July 13`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53765017003_79c0a76f0e_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53765017003_c2325134d4_o.jpg`
    },
    {
        date: `2023 - October 22`,
        venue: `House Show`,
        imageUrl: `https://live.staticflickr.com/65535/53765234145_d83828797b_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53765234145_d0298123bc_o.jpg`
    },
    {
        date: `2023 - December 16`,
        venue: `Other`,
        imageUrl: `https://live.staticflickr.com/65535/53763551880_0eb940f032_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763551880_df06ed6cd2_o.jpg`
    },
    {
        date: `2024 - April 9`,
        venue: `The Beehive`,
        imageUrl: `https://live.staticflickr.com/65535/53763551875_9a8f91d0b4_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763551875_d5378c299f_o.jpg`
    },
    {
        date: `2024 - April 14`,
        venue: `House Show`,
        imageUrl: `https://live.staticflickr.com/65535/53763337448_8096fe0c1b_w.jpg`,
        largeUrl: `https://live.staticflickr.com/65535/53763337448_d00b417330_o.jpg`
    },
];


const createCard = (flyerList) => {
    const box = document.querySelector(".flyers-grid");
    box.innerHTML="";
    flyerList.forEach(flyers => {
        box.innerHTML += `
        <div class="card">
            <img src="${flyers.imageUrl}" alt="${flyers.date}" loading="lazy" id="myImg">
        </div>`;
    })
}
createCard(flyers);




/* MODAL CODE */

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var images = document.querySelectorAll(".flyers-grid img");

images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.dataset.largeUrl || this.src;
    };
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
};