const slide = new Slider('#slider1')

const showHeroText = function () {
  const texts = document.querySelectorAll('.hero__text')
  texts.forEach((txt) => {
    txt.classList.add('hide', 'visible')
  })
}

showHeroText()
