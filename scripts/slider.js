const titles = [
  {
    mainTitle: 'Niepubliczne Przedszkole Zielona Łąka',
    subTitle: 'Zaprasza rodziców wraz z dziećmi',
  },
  {
    mainTitle: 'Rekrutacja trwa cały rok',
    subTitle: 'Zapraszamy do kontaktu po więcej informacji',
  },
  {
    mainTitle: 'Ciepła i rodzinna atmosfera',
    subTitle: 'Indywidualne podejście do każdego dziecka',
  },
]

class Slider {
  constructor(elemSelector) {
    this.currentSlide = 0
    this.sliderSelector = elemSelector
    this.elem = null
    this.slider = null
    this.slides = null
    this.prev = null
    this.next = null
    this.dots = []
    this.generateSlider()
    this.changeSlide(this.currentSlide)
  }

  generateSlider() {
    this.slider = document.querySelector(this.sliderSelector)
    this.slider.classList.add('slider')

    const slidesWrapper = document.createElement('div')
    slidesWrapper.classList.add('slider__wrapper')

    this.slides = this.slider.children
    while (this.slides.length) {
      this.slides[0].classList.add('slider__slide')
      slidesWrapper.appendChild(this.slides[0])
    }

    this.slides = slidesWrapper.querySelectorAll('.slider__slide')

    this.slides.forEach((slider, index) => {
      const title = document.createElement('h2')
      title.classList.add('hero__title')
      title.innerText = titles[index].mainTitle
      slider.appendChild(title)
      const text = document.createElement('p')
      text.classList.add('hero__text')
      text.innerText = titles[index].subTitle
      slider.appendChild(text)
    })

    this.slider.appendChild(slidesWrapper)

    this.createPrevNext()
    this.createDots()
  }

  createPrevNext() {
    this.prev = document.createElement('i')
    this.prev.classList.add('slider__btn-prev')
    this.prev.classList.add('fas', 'fa-chevron-left', 'fa-2x')
    this.prev.addEventListener('click', () => this.slidePrev())

    this.next = document.createElement('i')
    this.next.classList.add('slider__btn-next')
    this.next.classList.add('fas', 'fa-chevron-right', 'fa-2x')
    this.next.addEventListener('click', () => this.slideNext())

    const nav = document.createElement('div')
    nav.classList.add('slider__nav')
    nav.setAttribute('aria-label', 'Slider prev next')
    nav.appendChild(this.prev)
    nav.appendChild(this.next)
    this.slider.appendChild(nav)
  }

  createDots() {
    const ulDots = document.createElement('ul')
    ulDots.classList.add('slider__dots')
    ulDots.setAttribute('aria-label', 'Slider pagination')

    for (let i = 0; i < this.slides.length; i++) {
      const li = document.createElement('li')
      li.classList.add('slider__dots__element')

      const btn = document.createElement('button')
      btn.classList.add('slider__dots__btn')
      btn.type = 'button'
      btn.innerText = i + 1
      btn.setAttribute('aria-label', 'Set slide ' + (i + 1))
      btn.addEventListener('click', () => this.changeSlide(i))

      li.appendChild(btn)

      ulDots.appendChild(li)

      this.dots.push(li)
    }

    this.slider.appendChild(ulDots)
  }

  changeSlide(index) {
    this.slides.forEach((slide) => {
      slide.classList.remove('slider__slide-active')
      slide.setAttribute('aria-hidden', true)
    })

    this.slides[index].classList.add('slider__slide-active')
    this.slides[index].setAttribute('aria-hidden', false)

    this.dots.forEach((dot) => {
      dot.classList.remove('slider__dots__element-active')
    })

    this.dots[index].classList.add('slider__dots__element-active')

    this.currentSlide = index
  }

  slidePrev() {
    this.currentSlide--
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1
    }
    this.changeSlide(this.currentSlide)
  }

  slideNext() {
    this.currentSlide++
    if (this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0
    }
    this.changeSlide(this.currentSlide)
  }
}
