const header = document.querySelector(".nav-bar");

const navItems = [
  { href: "index.html", text: "Strona główna" },
  { href: "news.html", text: "Aktualności" },
  {
    text: "Organizacja ",
    icon: null,
    sublinks: [
      { href: "recruitment.html", text: "Rekrutacja" },
      { href: "regulations.html", text: "Regulamin" },
      { href: "downloads.html", text: "Do pobrania" },
      { href: "rodo.html", text: "RODO" },
    ],
  },
  {
    text: "Przedszkole ",
    icon: null,
    sublinks: [
      { href: "about.html", text: "O nas" },
      { href: "classess.html", text: "Zajęcia" },
      { href: "plan.html", text: "Plan dnia" },
      { href: "menu.html", text: "Jadłospis" },
    ],
  },
  { href: "gallery.html", text: "Galeria" },
  { href: "contact.html", text: "Kontakt" },
];

function generateNav() {
  const logoLink = document.createElement("a");
  logoLink.setAttribute("href", "index.html");

  const logoImg = document.createElement("img");
  logoImg.classList.add("nav-bar__logo");
  logoImg.setAttribute("src", "./img/logo.png");
  logoImg.setAttribute("alt", "logo");
  logoLink.appendChild(logoImg);

  const nav = document.createElement("nav"),
        list = document.createElement("ul");

  let navItem, navLink, ul, subNavItem;

  list.classList.add("nav-bar__links");

  navItems.forEach((item) => {
    navItem = document.createElement("li");
    navItem.classList.add("nav-bar__links__item");

    navLink = document.createElement("a");
    if (item.href) {
      navLink.setAttribute("href", item.href);
    }
    navLink.classList.add("nav-bar__single-link");
    navLink.innerText = item.text;
    navItem.appendChild(navLink);

    if ("icon" in item) {
      const icon = document.createElement("i");
      icon.classList.add("fas", "fa-caret-down");
      navLink.appendChild(icon);
    }

    if ("sublinks" in item) {
      ul = document.createElement("ul");
      ul.classList.add("nav-bar__sublinks");

      item.sublinks.forEach((el) => {
        subNavItem = document.createElement("li");
        subNavItem.classList.add("nav-bar__links__item");

        const subNavLink = document.createElement("a");
        subNavLink.setAttribute("href", el.href);
        subNavLink.classList.add("nav-bar__single-link");
        subNavLink.innerText = el.text;
        subNavItem.appendChild(subNavLink);

        ul.appendChild(subNavItem);
      });
      navItem.appendChild(ul);
    }
    list.appendChild(navItem);
  });

  nav.appendChild(list);

  const mobileMenu = document.createElement("div");
  mobileMenu.classList.add("nav-bar__mobile");

  const iconOpen = document.createElement("i"); 
        iconClose = document.createElement("i");

  iconOpen.classList.add("fas", "fa-ellipsis-h", "nav-bar__icon");
  iconOpen.setAttribute("id", "open");

  iconClose.classList.add("fas", "fa-times", "nav-bar__icon");
  iconClose.setAttribute("id", "close");

  mobileMenu.appendChild(iconOpen);
  mobileMenu.appendChild(iconClose);

  header.appendChild(logoLink);
  header.appendChild(nav);
  header.appendChild(mobileMenu);

  changeNavBarVisibility(nav, iconOpen, iconClose);
}

const changeNavBarVisibility = function (menu, open, close) {
  const navBarItems = document.querySelectorAll(".nav-bar__links__item");

  close.style.display = "none";

  open.addEventListener("click", function () {
    this.style.display = "none";
    close.style.display = "block";
    navBarDisplay("show", menu, navBarItems);
  });

  close.addEventListener("click", function () {
    this.style.display = "none";
    open.style.display = "block";
    navBarDisplay("hide", menu, navBarItems);
  });
};

const navBarDisplay = function(state, menu, items) {
  if (state === "show") {
    menu.classList.add("show");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add("show");
    }
  } else {
    menu.classList.remove("show");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("show");
    }
  }
}

generateNav();
