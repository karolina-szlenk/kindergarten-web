const wayOfContact = [
  {
    link: null,
    icon: ["fas", "fa-map-marker-alt"],
    description: `Niepubliczne Przedszkole
        ZIELONA ŁĄKA
        ul. Akacjowa 1
        84-300 Lębork`,
  },
  {
    link: "tel:+48504670846",
    icon: ["fas", "fa-phone-alt"],
    description: "+48 504 670 846",
  },
  {
    link: "mailto:szlenk.tadeusz@gmail.com",
    icon: ["fas", "fa-envelope"],
    description: "szlenk.tadeusz@gmail.com",
  },
  {
    link: "https://www.facebook.com/przedszkolezielona/",
    icon: ["fab", "fa-facebook-f"],
    description: null,
  }
];

function createFooter() {
    const footer = document.querySelector("footer");
    const container = document.createElement("div");
    container.classList.add("container");
    
    const heading = document.createElement("h3");
    heading.classList.add("main__title");
    heading.innerText = "Kontakt";
    container.appendChild(heading);
    
    const sectionContact = document.createElement("section");
    sectionContact.classList.add("contact");
    sectionContact.setAttribute("id", "contact");
    
    wayOfContact.forEach((contact) => {
      const contactElement = document.createElement("div");
      contactElement.classList.add("contact__element");
    
      const link = document.createElement("a");
      link.setAttribute("href", contact.link);
      link.classList.add("contact__link");
    
      const contactIcon = document.createElement("i");
      contactIcon.classList.add(
        "contact__icon",
        contact.icon[0],
        contact.icon[1],
        "fa-2x"
      );
    
      const contactDescription = document.createElement("p");
      contactDescription.classList.add("contact__description");
      contactDescription.innerText = contact.description;
    
      if (typeof contact.link === "string") {
        contactElement.appendChild(link);
        link.appendChild(contactIcon);
        link.appendChild(contactDescription);
      } else {
        contactElement.appendChild(contactIcon);
        contactElement.appendChild(contactDescription);
      }
      sectionContact.appendChild(contactElement);
    });
    
    container.appendChild(sectionContact);
    footer.appendChild(container);
    
    const sectionMeadow = document.createElement("section");
    sectionMeadow.classList.add("meadow", "bottom");
    footer.appendChild(sectionMeadow);
    
    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    
    const footerInfo = document.createElement("div");
    footerInfo.classList.add("footer__info");
    
    const footerRights = document.createElement("div");
    footerRights.classList.add("footer__rights");
    
    const footerCopyrights = document.createElement("p");
    footerCopyrights.classList.add("footer__copyrights");
    footerCopyrights.textContent = "©";
    
    const footerYear = document.createElement("p");
    footerYear.classList.add("footer__year");
    footerYear.innerText = new Date().getFullYear();
    
    const footerDivider = document.createElement("p");
    footerDivider.classList.add("footer__divider");
    footerDivider.innerText = "|";
    
    footerRights.appendChild(footerCopyrights);
    footerRights.appendChild(footerYear);
    footerRights.appendChild(footerDivider);
    
    const footerText = document.createElement("div");
    footerText.classList.add("footer__text");
    
    const txt1 = document.createElement("p");
    txt1.innerText = "Niepubliczne Przedszkole";
    
    const txt2 = document.createElement("p");
    txt2.classList.add("footer__name");
    txt2.innerText = "ZIELONA ŁĄKA";
    
    footerText.appendChild(txt1);
    footerText.appendChild(txt2);
    
    footerInfo.appendChild(footerRights);
    footerInfo.appendChild(footerText);
    footerDiv.appendChild(footerInfo);
    
    const footerSignature = document.createElement("p");
    footerSignature.classList.add("footer__signature");
    footerSignature.innerText = "Realizacja KS.";
    
    footerDiv.appendChild(footerSignature);
    footer.appendChild(footerDiv);
}

createFooter();