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
    this.wrap = null
    this.printSingleArticle()
  }

  generateSingleArticle() {
    this.article = document.createElement('article')
  }

  generateWrap() {
    this.wrap = document.createElement('div')
    this.wrap.classList.add('news__link')
    this.article.appendChild(this.wrap)
  }

  generateImage() {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('news__img')

    const img = document.createElement('img')
    img.setAttribute('src', this.src)
    img.setAttribute('alt', this.alt)
    imgContainer.appendChild(img)

    this.wrap.appendChild(imgContainer)
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
    newsDescription.innerText = this.description
    contentContainer.appendChild(newsDescription)

    this.wrap.appendChild(contentContainer)
  }

  printDate() {
    const datePublication = new Array(this.year, this.month, this.day).join(',')
    const dateFormatted = new Date(datePublication).toLocaleDateString('pl-PL')
    return dateFormatted
  }

  printSingleArticle() {
    this.generateSingleArticle()
    this.generateWrap()
    this.generateImage()
    this.generateContent()
  }
}

class SneakPeek extends Entry {
  generateLink() {
    this.link = document.createElement('a')
    this.link.setAttribute('href', this.href)
    this.article.prepend(this.link)
  }

  generateSingleArticle() {
    super.generateSingleArticle()
    this.article.classList.add('news__wrapper')
  }

  generateShortDescription() {
    const newsDescription = document.querySelector('.news__short-description')
    if (newsDescription) {
      newsDescription.innerText = this.reduceText(this.description)
    }
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
    super.printSingleArticle()
    const wrapper = document.querySelector('.main__description')
    if (wrapper) {
      wrapper.prepend(this.article)
    }
    this.generateLink()
    this.link.append(this.wrap)
    this.generateShortDescription()
  }
}

class News extends Entry {
  addNewsDetailsView() {
    const contentContainer = document.querySelector('.news__link')
    const newsTitle = document.querySelector('.news__title')
    if (contentContainer) {
      contentContainer.classList.add('news__details')
    }
    if (newsTitle) {
      newsTitle.classList.add('news__title-details')
    }
  }

  addImageStyle() {
    const imgContainer = document.querySelector('.news__img')
    if (imgContainer) {
      imgContainer.classList.add('news__img-details')
    }
  }

  printSingleArticle() {
    super.printSingleArticle()
    const wrapper = document.querySelector('.main__article')
    if (wrapper) {
      wrapper.prepend(this.article)
    }
    this.addNewsDetailsView()
    this.addImageStyle()
  }
}
