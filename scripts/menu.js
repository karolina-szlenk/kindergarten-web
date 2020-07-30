//change of meals and data required once a week
const mainContent = document.querySelector('.main__description')
const date = '27-31.07.20'

const menu = [
  {
    day: 'Poniedziałek',
    img: {
      src: '../img/menu-monday.png',
      alt: 'menu-poniedziałek',
    },
    meals: [
      {
        breakfast:
          '2 kanapki chleb jasny 50 g, masło roślinne 10 g, herbatka z owoców leśnych 25 ml, twarożek na słodko 15 g, wędlina wieprzowa 15 g, warzywa na kanapki 30 g, płatki czekoladowe na mleku',
      },
      {
        dinner: 'Zupa krupnik 350 ml, pizza domowa 250 g, kompot',
      },
      {
        dessert: 'Ciasto domowe',
      },
    ],
  },
  {
    day: 'Wtorek',
    img: {
      src: '../img/menu-tuesday.png',
      alt: 'menu-wtorek',
    },
    meals: [
      {
        breakfast:
          '2 kanapki grahamka 50 g ,masło roślinne 10 g, herbatka żurawinowa 250 ml, pasta z czerwonej fasoli 15 g, ser podlaski 15 g, warzywa na kanapki 30g, herbatniki',
      },
      {
        dinner:
          'Zupa pomidorowa z makaronem 350 ml, kotlet mielony wieprzowy 90 g, ziemniaki z koperkiem 90 g, surówka z czerwonej kapusty 90 g, kompot',
      },
      {
        dessert: 'Owoc',
      },
    ],
  },
  {
    day: 'Środa',
    img: {
      src: '../img/menu-wednesday.png',
      alt: 'menu-środa',
    },
    meals: [
      {
        breakfast:
          '2 kanapki chleb razowy 50 g, masło roślinne 10 g, herbatka z aronii 250 ml, serek wiejski 10 g, wędlina drobiowa 15 g, warzywa na kanapki 30 g, sucharki',
      },
      {
        dinner: 'Zupa pieczarkowa 350 ml, pierogi leniwe + polewa jogurtowa 250 g, kompot',
      },
      {
        dessert: 'Jogurt',
      },
    ],
  },
  {
    day: 'Czwartek',
    img: {
      src: '../img/menu-thursday.png',
      alt: 'menu-czwartek',
    },
    meals: [
      {
        breakfast:
          '2 kanapki kajzerka 50 g, masło roślinne 10 g, herbatka z cytryną 250 ml, dżem niskosłodzony 15 g, ser morski 15 g, warzywa na kanapki 30 g, biszkopty',
      },
      {
        dinner:
          'Zupa barszcz ukraiński 350 ml, pierś z kurczaka faszerowana szpinakiem i serem w sosie własnym 130 g, ryż biały 90 g, surówka z marchewki 60 g, kompot',
      },
      {
        dessert: 'Ciasto domowe',
      },
    ],
  },
  {
    day: 'Piątek',
    img: {
      src: '../img/menu-friday.png',
      alt: 'menu-piątek',
    },
    meals: [
      {
        breakfast:
          '2 kanapki - chleb jasny 50 g, masło roślinne 10 g, herbatka miętowa 250 ml, pasta jajeczna ze szczypiorkiem 15 g, ser gouda 15 g, warzywa na kanapki 30 g, płatki owsiane na mleku',
      },
      {
        dinner:
          'Zupa koperkowa 350 ml, paluszki rybne 90 g, ziemniaki puree z koperkiem 90 g, surówka z kiszonej kapusty 90 g, kompot',
      },
      {
        dessert: 'Owoc',
      },
    ],
  },
]

const setCurrentData = function () {
  const data = document.querySelector('#data')
  data.innerHTML = '27-31.07.2020'
}

const generateMenu = function () {
  menu.forEach((day) => {
    const menuCell = document.createElement('div')
    menuCell.classList.add('menu__row', 'menu__cell')

    const menuDay = document.createElement('div')
    menuDay.classList.add('menu__day')

    const menuCircle = document.createElement('div')
    menuCircle.classList.add('menu__circle')
    menuDay.appendChild(menuCircle)

    const menuImg = document.createElement('img')
    menuImg.classList.add('menu__img')
    menuImg.setAttribute('src', day.img.src)
    menuImg.setAttribute('alt', day.img.alt)
    menuDay.appendChild(menuImg)

    menuCell.appendChild(menuDay)

    const menuCol = document.createElement('div')
    menuCol.classList.add('menu__col')
    menuCell.appendChild(menuCol)

    day.meals.forEach((item) => {
      const menuRow = document.createElement('div')
      menuRow.classList.add('menu__row')

      const menuMeal = document.createElement('p')
      menuMeal.classList.add('menu__row__name')

      const menuDescription = document.createElement('div')
      menuDescription.classList.add('menu__row__description', 'menu__row__description--modifier')

      if ('breakfast' in item) {
        menuMeal.innerText = 'Śniadanie'
        menuDescription.innerText = item.breakfast
      } else if ('dinner' in item) {
        menuMeal.innerText = 'Obiad'
        menuDescription.innerText = item.dinner
      } else {
        menuMeal.innerText = 'Podwieczorek'
        menuDescription.innerText = item.dessert
      }

      menuRow.appendChild(menuMeal)
      menuRow.appendChild(menuDescription)
      menuCol.appendChild(menuRow)
    })

    mainContent.appendChild(menuCell)
  })
}

const generateDownloadButton = function () {
  const link = document.createElement('a')
  link.classList.add('link', 'link--double-break')
  link.setAttribute('id', 'menu')
  link.setAttribute('download', `Menu-${date}`)

  mainContent.append(link)

  const btn = document.createElement('button')
  btn.classList.add('main__btn', 'main__btn--modifier')
  btn.innerText = ' Pobierz Jadłospis'

  link.append(btn)

  const icon = document.createElement('i')
  icon.classList.add('fa', 'fa-download')

  btn.prepend(icon)
}

const downloadMenu = function () {
  const btn = document.querySelector('.main__btn')
  btn.addEventListener('click', function () {
    const redirectWindow = window.open(`./downloads/Menu-${date}.pdf`, '_blank')
    redirectWindow.location
  })
}

window.onload = function () {
  setCurrentData()
  generateMenu()
  generateDownloadButton()
  downloadMenu()
}
