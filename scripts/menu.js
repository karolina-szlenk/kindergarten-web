//change of meals and data required once a week
const mainContent = document.querySelector('.main__description')

const menu = [
  {
    day: 'Poniedziałek',
    img:
      {
        src:'../img/menu-monday.png',
        alt: 'menu-poniedziałek'
      },
    meals: [
      {
        breakfast:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus leo vitae neque interdum consequat.',
      },
      {
        dinner:
          'Pellentesque rhoncus leo vitae neque interdum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus leo vitae neque interdum consequat.',
      },
    ],
  },
  {
    day: 'Wtorek',
    img:
      {
        src:'../img/menu-monday.png',
        alt: 'menu-wtorek'
      },
    meals: [
      {
        breakfast:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus leo vitae neque interdum consequat.',
      },
      {
        dinner:
          'Pellentesque rhoncus leo vitae neque interdum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus leo vitae neque interdum consequat.',
      },
    ],
  },
  {
    day: 'Środa',
    img:
      {
        src:'../img/menu-monday.png',
        alt: 'menu-środa'
      },
    meals: [
      {
        breakfast:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus leo vitae neque interdum consequat.',
      },
      {
        dinner:
          'Pellentesque rhoncus leo vitae neque interdum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus leo vitae neque interdum consequat.',
      },
    ],
  },
  {
    day: 'Czwartek',
    img:
      {
        src:'../img/menu-monday.png',
        alt: 'menu-czwartek'
      },
    meals: [
      {
        breakfast:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus leo vitae neque interdum consequat.',
      },
      {
        dinner:
          'Pellentesque rhoncus leo vitae neque interdum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus leo vitae neque interdum consequat.',
      },
    ],
  },
  {
    day: 'Piątek',
    img:
      {
        src:'../img/menu-monday.png',
        alt: 'menu-piątek'
      },
    meals: [
      {
        breakfast:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus leo vitae neque interdum consequat.',
      },
      {
        dinner:
          'Pellentesque rhoncus leo vitae neque interdum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus leo vitae neque interdum consequat.',
      },
    ],
  },
]

const setCurrentData = function () {
  const data = document.querySelector('#data')
  data.innerHTML = '1-5.06.2020'
}

const generateMenu = function () {
  menu.forEach((day) => {
    const menuCell = document.createElement('div')
    menuCell.classList.add('menu__row', 'menu__cell')

    const menuDay = document.createElement('div')
    menuDay.classList.add('menu__day')

    const menuImg = document.createElement("img")
    menuImg.classList.add('menu__img')
    menuImg.setAttribute("src", day.img.src);
    menuImg.setAttribute("alt", day.img.alt);
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
      } else {
        menuMeal.innerText = 'Obiad'
        menuDescription.innerText = item.dinner
      }

      menuRow.appendChild(menuMeal)
      menuRow.appendChild(menuDescription)
      menuCol.appendChild(menuRow)
    })

    

    mainContent.appendChild(menuCell)
  })
}

setCurrentData()
generateMenu()
