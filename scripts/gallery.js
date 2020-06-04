const gallery = [
  {
    name: "Urodzinki Lenki",
    img: "../img/edu.jpg",
    href: "urodzinki-lenki.html",
    pictures: [
      "https://www.prawo.pl/gfx/prawopl/_thumbs/pl/wkdokumenty/000/300/576/1/dzieci-00020-thinkstockphotos,oX6D62aapFTLo7bXW5mZ.jpg.webp",
      "https://cdn.galleries.smcloud.net/t/galleries/gf-qJYe-hwyT-todU_zabawy-urodzinowe-664x442-nocrop.jpg",
      "https://www.taniec.walbrzych.pl/assets/spaw2/uploads/images/kopalnia-soli-wieliczka-kopalnia-wiedzy-jak-zorganizowa-urodziny-firmowej2-700-465-09-01-2018.jpg",
    ],
  },
  {
    name: "Wigilia 2019",
    img: "../img/meal.jpg",
    href: "wigilia-2019.html",
    pictures: [
      "https://www.prawo.pl/gfx/prawopl/_thumbs/pl/wkdokumenty/000/300/576/1/dzieci-00020-thinkstockphotos,oX6D62aapFTLo7bXW5mZ.jpg.webp",
      "https://cdn.galleries.smcloud.net/t/galleries/gf-qJYe-hwyT-todU_zabawy-urodzinowe-664x442-nocrop.jpg",
      "https://www.taniec.walbrzych.pl/assets/spaw2/uploads/images/kopalnia-soli-wieliczka-kopalnia-wiedzy-jak-zorganizowa-urodziny-firmowej2-700-465-09-01-2018.jpg",
    ],
  },
  {
    name: "Bal karnawałowy",
    img: "../img/meal.jpg",
    href: "bal-karnawalowy.html",
    pictures: [
      "https://www.prawo.pl/gfx/prawopl/_thumbs/pl/wkdokumenty/000/300/576/1/dzieci-00020-thinkstockphotos,oX6D62aapFTLo7bXW5mZ.jpg.webp",
      "https://cdn.galleries.smcloud.net/t/galleries/gf-qJYe-hwyT-todU_zabawy-urodzinowe-664x442-nocrop.jpg",
      "https://www.taniec.walbrzych.pl/assets/spaw2/uploads/images/kopalnia-soli-wieliczka-kopalnia-wiedzy-jak-zorganizowa-urodziny-firmowej2-700-465-09-01-2018.jpg",
    ],
  },
  
];

const mainDescription = document.querySelector(".main__description");
const div = document.createElement("div");
div.classList.add("info__container", "info__container--modifier");
gallery.forEach(function (item) {
  const article = document.createElement("article");
  article.classList.add("info__element");
  const heading = document.createElement("h3");
  heading.classList.add("info__title");
  heading.innerText = item.name;
  const link = document.createElement("a");
  link.setAttribute("href", item.href);
  const img = document.createElement("img");
  img.classList.add("info__image");
  img.setAttribute("src", item.img);
  link.append(img);
  article.prepend(heading);
  article.append(link);
  div.append(article);
});
mainDescription.append(div);
