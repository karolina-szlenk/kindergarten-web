const footer__year = document.querySelector(".footer__year");

function generateYear() {   
    const year = new Date().getFullYear();
    footer__year.append(year);
}

generateYear();