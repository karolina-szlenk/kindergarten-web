const gallery = [
  {
    name: "Urodzinki Lenki",
    img:
      "https://www.taniec.walbrzych.pl/assets/spaw2/uploads/images/kopalnia-soli-wieliczka-kopalnia-wiedzy-jak-zorganizowa-urodziny-firmowej2-700-465-09-01-2018.jpg",
    pictures: [
      "https://www.prawo.pl/gfx/prawopl/_thumbs/pl/wkdokumenty/000/300/576/1/dzieci-00020-thinkstockphotos,oX6D62aapFTLo7bXW5mZ.jpg.webp",
      "https://cdn.galleries.smcloud.net/t/galleries/gf-qJYe-hwyT-todU_zabawy-urodzinowe-664x442-nocrop.jpg",
      "https://www.taniec.walbrzych.pl/assets/spaw2/uploads/images/kopalnia-soli-wieliczka-kopalnia-wiedzy-jak-zorganizowa-urodziny-firmowej2-700-465-09-01-2018.jpg",
    ],
  },
  {
    name: "Wigilia 2019",
    img:
      "https://cdn.pixabay.com/photo/2018/05/16/10/11/christmas-3405368_960_720.jpg",
    pictures: [
      "https://www.prawo.pl/gfx/prawopl/_thumbs/pl/wkdokumenty/000/300/576/1/dzieci-00020-thinkstockphotos,oX6D62aapFTLo7bXW5mZ.jpg.webp",
      "https://cdn.galleries.smcloud.net/t/galleries/gf-qJYe-hwyT-todU_zabawy-urodzinowe-664x442-nocrop.jpg",
      "https://www.taniec.walbrzych.pl/assets/spaw2/uploads/images/kopalnia-soli-wieliczka-kopalnia-wiedzy-jak-zorganizowa-urodziny-firmowej2-700-465-09-01-2018.jpg",
    ],
  },
  {
    name: "Bal karnawałowy",
    img:
      "https://image.freepik.com/free-photo/funny-girl-cat-costume-touching-hair_23-2147925802.jpg",
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
  const picturesContainer = document.createElement("div");
  picturesContainer.classList.add("gallery");
  const link = document.createElement("a");
  link.classList.add("image");
  link.setAttribute("href", item.img);
  const img = document.createElement("img");
  img.classList.add("info__image");
  img.setAttribute("src", item.img);

  const pictures = item.pictures;
  pictures.forEach(function (el) {
    const link2 = document.createElement("a");
    link2.setAttribute("href", el);
    const img2 = document.createElement("img");
    img2.setAttribute("src", el);
    link2.classList.add("hide", "image");
    link2.append(img2);
    picturesContainer.append(link2);
  });

  picturesContainer.prepend(link);

  link.append(img);
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
