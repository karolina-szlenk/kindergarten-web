const gallery = [
  {
    name: "Przedszkole",
    pictures: [
      "../gallery/kindergarten/pic1.jpg",
      "../gallery/kindergarten/pic2.jpg",
      "../gallery/kindergarten/pic3.jpg",
      "../gallery/kindergarten/pic4.jpg",
      "../gallery/kindergarten/pic5.jpg",
      "../gallery/kindergarten/pic6.jpg"
    ],
  },
  {
    name: "Dzień Babci i Dziadka",
    pictures: [
      "../gallery/grandparents-day/pic1.jpg",
      "../gallery/grandparents-day/pic2.jpg",
      "../gallery/grandparents-day/pic3.jpg",
      "../gallery/grandparents-day/pic4.jpg",
      "../gallery/grandparents-day/pic5.jpg",
      "../gallery/grandparents-day/pic6.jpg",
      "../gallery/grandparents-day/pic7.jpg",
    ],
  },
  {
    name: "Gry i zabawy",
    pictures: [
      "../gallery/fun-and-games/pic1.jpg",
      "../gallery/fun-and-games/pic2.jpg",
      "../gallery/fun-and-games/pic3.jpg",
      "../gallery/fun-and-games/pic4.jpg",
      "../gallery/fun-and-games/pic5.jpg",
      "../gallery/fun-and-games/pic6.jpg",
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
