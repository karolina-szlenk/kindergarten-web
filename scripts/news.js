class Entry {
  constructor(href, day, month, year, src, alt, title, description) {
    this.href = href
    this.day = day
    this.month = month
    this.year = year
    this.src = src
    this.alt = alt
    this.title = title
    this.description = description
    this.article = null
    this.link = null
    this.printSingleArticle()
  }

  generateSingleArticle() {
    this.article = document.createElement('article')
    this.article.classList.add('news__wrapper')

    this.link = document.createElement('a')
    this.link.classList.add('news__link')
    this.link.setAttribute('href', this.href)
    this.article.appendChild(this.link)
  }

  generateImage() {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('news__img')

    const img = document.createElement('img')
    img.setAttribute('src', this.src)
    img.setAttribute('alt', this.alt)
    imgContainer.appendChild(img)

    this.link.appendChild(imgContainer)
  }

  generateContent() {
    const contentContainer = document.createElement('div')
    contentContainer.classList.add('news__content')

    const date = document.createElement('div')
    date.classList.add('news__date')
    date.innerText = this.printDate()
    contentContainer.appendChild(date)

    const newsTitle = document.createElement('h4')
    newsTitle.classList.add('news__title')
    newsTitle.innerText = this.title
    contentContainer.appendChild(newsTitle)

    const newsDescription = document.createElement('div')
    newsDescription.classList.add('news__short-description')
    newsDescription.innerText = this.reduceText(this.description)
    contentContainer.appendChild(newsDescription)

    this.link.appendChild(contentContainer)
  }

  printDate() {
    const datePublication = new Array(this.year, this.month, this.day).join(',')
    const dateFormatted = new Date(datePublication).toLocaleDateString('pl-PL')
    return dateFormatted
  }

  reduceText(txt) {
    const num = 100
    let newText
    if (txt.length >= num) {
      newText = txt.slice(0, num)
      if (newText[newText.length - 1] === ' ') {
        newText = newText.substring(0, newText.length - 1)
      }
      const short = newText + '...'
      return short
    } else {
      return txt
    }
  }

  printSingleArticle() {
    const wrapper = document.querySelector('.main__description')

    this.generateSingleArticle()
    wrapper.appendChild(this.article)

    this.generateImage()
    this.generateContent()
  }
}

const entry1 = new Entry(
  'przedszkolaki.html',
  20,
  4,
  2020,
  '../img/edu.jpg',
  'lala',
  'Przedszkolaki',
  'Lorem ipsum.'
)

const entry2 = new Entry(
  'przedszkolaki-wracaja.html',
  25,
  5,
  2020,
  '../img/pencils.jpg',
  'penc',
  'Przedszkolaki wracają do szkoły',
  'Mauris tristique massa vulputate arcu vestibulum, et consectetur diam pellentesque. Nulla facilisis bibendum turpis, et finibus magna semper at. Phasellus iaculis metus sit amet sagittis auctor. Vestibulum hendrerit augue vel ullamcorper molestie. Nulla eget velit arcu. Morbi id eros quis arcu ornare ultricies. Aenean leo magna, consectetur ut sapien in, efficitur gravida enim. Ut pellentesque metus at orci mollis, quis faucibus diam imperdiet. Maecenas est massa, mollis quis varius ac, fringilla at diam.'
)
