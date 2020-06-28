const menu = [
  {
    day: 'Poniedziałek',
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

setCurrentData()

const mainContent = document.querySelector('.main__description')

menu.forEach((day) => {
  const menuCell = document.createElement('div')
  menuCell.classList.add('menu__row', 'menu__cell')

  const menuDay = document.createElement('div')
  menuDay.classList.add('menu__day')

  const menuCol = document.createElement('div')
  menuCol.classList.add('menu__col')

  day.meals.forEach((item, index) => {
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

  menuCell.appendChild(menuDay)
  menuCell.appendChild(menuCol)
  mainContent.appendChild(menuCell)
})
