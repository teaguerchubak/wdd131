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


/* FOOTER HOVER IMAGES */

const hoverInst = document.getElementById(`hover-inst`);
const hoverInstagram = document.getElementById(`hover-instagram`);

const hoverYou = document.getElementById(`hover-you`);
const hoverYoutube = document.getElementById(`hover-youtube`);

const hoverBand = document.getElementById(`hover-band`);
const hoverBandcamp = document.getElementById(`hover-bandcamp`);

const hoverTik = document.getElementById(`hover-tik`);
const hoverTiktok = document.getElementById(`hover-tiktok`);

hoverInst.addEventListener('mouseover', () => {
    hoverInstagram.src = 'images/instagram-inverted.webp';
});
hoverInst.addEventListener('mouseout', () => {
    hoverInstagram.src = 'images/instagram-small.webp';
});

hoverYou.addEventListener('mouseover', () => {
    hoverYoutube.src = 'images/youtube-inverted.webp';
});
hoverYou.addEventListener('mouseout', () => {
    hoverYoutube.src = 'images/youtube-small.webp';
});

hoverBand.addEventListener('mouseover', () => {
    hoverBandcamp.src = 'images/bandcamp-inverted.webp';
});
hoverBand.addEventListener('mouseout', () => {
    hoverBandcamp.src = 'images/bandcamp-small.webp';
});

hoverTik.addEventListener('mouseover', () => {
    hoverTiktok.src = 'images/tiktok-inverted.webp';
});
hoverTik.addEventListener('mouseout', () => {
    hoverTiktok.src = 'images/tiktok-small.webp';
});


/* SHOWS PAGE */

const flyers = [
    {
        date: `2019 - April 26`, venue: `The Underground`, width: 400, height: 386,
        imageUrl: `images/2019-04-26.webp`,
        largeUrl: `images/2019-04-26-large.webp`,
    },
    {
        date: `2019 - May 17`, venue: `House Show`, width: 320, height: 400,
        imageUrl: `images/2019-05-17.webp`,
        largeUrl: `images/2019-05-17-large.webp`,
    },
    {
        date: `2019 - June 14`, venue: `The Underground`, width: 320, height: 400,
        imageUrl: `images/2019-06-14.webp`,
        largeUrl: `images/2019-06-14-large.webp`
    },
    {
        date: `2019 - July 18`, venue: `Other`, width: 400, height: 235,
        imageUrl: `images/2019-07-18.webp`,
        largeUrl: `images/2019-07-18-large.webp`
    },
    {
        date: `2019 - August 7`, venue: `The Underground`, width: 323, height: 400,
        imageUrl: `images/2019-08-07.webp`,
        imageUrl: `images/2019-08-07-large.webp`
    },
    {
        date: `2019 - August 10`, venue: `The Beehive`, width: 324, height: 400,
        imageUrl: `images/2019-08-10.webp`,
        largeUrl: `images/2019-08-10-large.webp`
    },
    {
        date: `2019 - August 23`, venue: `The Underground`, width: 320, height: 400,
        imageUrl: `images/2019-08-23.webp`,
        largeUrl: `images/2019-08-23-large.webp`
    },
    {
        date: `2019 - September 29`, venue: `The Underground`, width: 400, height: 400,
        imageUrl: `images/2019-09-29.webp`,
        largeUrl: `images/2019-09-29-large.webp`
    },
    {
        date: `2019 - October 14`, venue: `The Beehive`, width: 320, height: 400,
        imageUrl: `images/2019-10-14.webp`,
        largeUrl: `images/2019-10-14-large.webp`
    },
    {
        date: `2019 - December 29`, venue: `The Beehive`, width: 400, height: 284,
        imageUrl: `images/2019-12-29.webp`,
        largeUrl: `images/2019-12-29-large.webp`
    },
    {
        date: `2020 - January 24`, venue: `House Show`, width: 400, height: 282,
        imageUrl: `images/2020-01-24.webp`,
        largeUrl: `images/2020-01-24-large.webp`
    },
    {
        date: `2020 - March 11`, venue: `The Beehive`, width: 361, height: 400,
        imageUrl: `images/2020-03-11.webp`,
        largeUrl: `images/2020-03-11-large.webp`
    },
    {
        date: `2021 - June 21`, venue: `House Show`, width: 330, height: 400,
        imageUrl: `images/2021-06-21.webp`,
        largeUrl: `images/2021-06-21-large.webp`
    },
    {
        date: `2021 - July 13`, venue: `The Beehive`, width: 391, height: 400,
        imageUrl: `images/2021-07-13.webp`,
        largeUrl: `images/2021-07-13-large.webp`
    },
    {
        date: `2021 - August 13`, venue: `The Beehive`, width: 400, height: 342,
        imageUrl: `images/2021-08-13.webp`,
        largeUrl: `images/2021-08-13-large.webp`
    },
    {
        date: `2021 - October 16`, venue: `The Beehive`, width: 323, height: 400,
        imageUrl: `images/2021-10-16.webp`,
        largeUrl: `images/2021-10-16-large.webp`
    },
    {
        date: `2021 - November 12`, venue: `The Beehive`, width: 400, height: 400,
        imageUrl: `images/2021-11-12.webp`,
        largeUrl: `images/2021-11-12-large.webp`
    },
    {
        date: `2022 - May 21`, venue: `Other`, width: 400, height: 400,
        imageUrl: `images/2022-05-21.webp`,
        largeUrl: `images/2022-05-21-large.webp`
    },
    {
        date: `2022 - July 7`, venue: `House Show`, width: 400, height: 358,
        imageUrl: `images/2022-07-07.webp`,
        largeUrl: `images/2022-07-07-large.webp`
    },
    {
        date: `2022 - July 19`, venue: `The Beehive`, width: 400, height: 309,
        imageUrl: `images/2022-07-19.webp`,
        largeUrl: `images/2022-07-19-large.webp`
    },
    {
        date: `2023 - February 4`, venue: `House Show`, width: 400, height: 324,
        imageUrl: `images/2023-02-04.webp`,
        largeUrl: `images/2023-02-04-large.webp`
    },
    {
        date: `2023 - March 16`, venue: `The Beehive`, width: 320, height: 400,
        imageUrl: `images/2023-03-16.webp`,
        largeUrl: `images/2023-03-16-large.webp`
    },
    {
        date: `2023 - May 19`, venue: `The Beehive`, width: 400, height: 293,
        imageUrl: `images/2023-05-19.webp`,
        largeUrl: `images/2023-05-19-large.webp`
    },
    {
        date: `2023 - July 13`, venue: `The Beehive`, width: 320, height: 400,
        imageUrl: `images/2023-07-13.webp`,
        largeUrl: `images/2023-07-13-large.webp`
    },
    {
        date: `2023 - October 22`, venue: `House Show`, width: 400, height: 400,
        imageUrl: `images/2023-10-22.webp`,
        largeUrl: `images/2023-10-22-large.webp`
    },
    {
        date: `2023 - December 16`, venue: `Other`, width: 326, height: 400,
        imageUrl: `images/2023-12-16.webp`,
        largeUrl: `images/2023-12-16-large.webp`
    },
    {
        date: `2024 - April 9`, venue: `The Beehive`, width: 320, height: 400,
        imageUrl: `images/2024-04-09.webp`,
        largeUrl: `images/2024-04-09-large.webp`
    },
    {
        date: `2024 - April 14`, venue: `House Show`, width: 334, height: 400,
        imageUrl: `images/2024-04-14.webp`,
        largeUrl: `images/2024-04-14-large.webp`
    },
];


const createCard = (flyerList) => {
    const box = document.querySelector(".flyers-grid");
    box.innerHTML="";
    flyerList.forEach(flyers => {
        box.innerHTML += `
        <div class="card">
            <img src="${flyers.imageUrl}" alt="${flyers.date}" width= "${flyers.width}" height="${flyers.height}" loading="lazy" id="myImg">
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