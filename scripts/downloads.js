const data = [
  {
    file: "./downloads/Regulamin Przedszkola.pdf",
    link: document.querySelector("#regulation"),
  },
  {
    file: "./downloads/Karta informacyjna dziecka.pdf",
    link: document.querySelector("#kids-card"),
  },
  {
    file: "./downloads/Statut Przedszkola.pdf",
    link: document.querySelector("#statute"),
  },
];

for (let i = 0; i < data.length; i++) {
  const btn = data[i].link;
  btn.addEventListener("click", function () {
    const redirectWindow = window.open(data[i].file, "_blank");
    redirectWindow.location;
  });
}
