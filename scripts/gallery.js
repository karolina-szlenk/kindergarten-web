const gallery = [
  {
    name: "Urodzinki Lenki",
    pictures: [
      "https://www.taniec.walbrzych.pl/assets/spaw2/uploads/images/kopalnia-soli-wieliczka-kopalnia-wiedzy-jak-zorganizowa-urodziny-firmowej2-700-465-09-01-2018.jpg",
      "https://www.prawo.pl/gfx/prawopl/_thumbs/pl/wkdokumenty/000/300/576/1/dzieci-00020-thinkstockphotos,oX6D62aapFTLo7bXW5mZ.jpg.webp",
      "https://cdn.galleries.smcloud.net/t/galleries/gf-qJYe-hwyT-todU_zabawy-urodzinowe-664x442-nocrop.jpg",
      "https://www.taniec.walbrzych.pl/assets/spaw2/uploads/images/kopalnia-soli-wieliczka-kopalnia-wiedzy-jak-zorganizowa-urodziny-firmowej2-700-465-09-01-2018.jpg",
    ],
  },
  {
    name: "Wigilia 2019",
    pictures: [
      "https://cdn.pixabay.com/photo/2018/05/16/10/11/christmas-3405368_960_720.jpg",
      "https://www.prawo.pl/gfx/prawopl/_thumbs/pl/wkdokumenty/000/300/576/1/dzieci-00020-thinkstockphotos,oX6D62aapFTLo7bXW5mZ.jpg.webp",
      "https://cdn.galleries.smcloud.net/t/galleries/gf-qJYe-hwyT-todU_zabawy-urodzinowe-664x442-nocrop.jpg",
      "https://www.taniec.walbrzych.pl/assets/spaw2/uploads/images/kopalnia-soli-wieliczka-kopalnia-wiedzy-jak-zorganizowa-urodziny-firmowej2-700-465-09-01-2018.jpg",
    ],
  },
  {
    name: "Bal karnawałowy",
    pictures: [
      "https://image.freepik.com/free-photo/funny-girl-cat-costume-touching-hair_23-2147925802.jpg",
      "https://www.prawo.pl/gfx/prawopl/_thumbs/pl/wkdokumenty/000/300/576/1/dzieci-00020-thinkstockphotos,oX6D62aapFTLo7bXW5mZ.jpg.webp",
      "https://cdn.galleries.smcloud.net/t/galleries/gf-qJYe-hwyT-todU_zabawy-urodzinowe-664x442-nocrop.jpg",
      "https://www.taniec.walbrzych.pl/assets/spaw2/uploads/images/kopalnia-soli-wieliczka-kopalnia-wiedzy-jak-zorganizowa-urodziny-firmowej2-700-465-09-01-2018.jpg",
    ],
  },
];

const mainDescription = document.querySelector(".main__description");
const div = document.createElement("div");
div.classList.add("item__container", "item__container--modifier");
gallery.forEach(function (item) {
  const article = document.createElement("article");
  article.classList.add("item__element");
  const heading = document.createElement("h3");
  heading.classList.add("item__title");
  heading.innerText = item.name;
  const picturesContainer = document.createElement("div");
  picturesContainer.classList.add("gallery");
  const pictures = item.pictures;
  pictures.forEach(function (el, index) {
    const link = document.createElement("a");
    link.setAttribute("href", el);
    const img = document.createElement("img");
    img.setAttribute("src", el);
    img.classList.add("item__image");
    link.classList.add("image");
    if (index > 0) {
      link.classList.add("hide");
    }
    link.append(img);
    picturesContainer.append(link);
  });
  article.prepend(heading);
  article.append(picturesContainer);
  div.append(article);
});
mainDescription.append(div);

// the container for each gallery
$(".gallery").each(function () {
  $(this).magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
