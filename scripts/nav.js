function changeNavBarVisibility() {
  const navBarIconOpen = document.querySelector('#open');
  const navBarIconClose = document.querySelector('#close');
  const navBarItems = document.querySelectorAll('.nav-bar__links__item');
  const nav = document.querySelector('nav');

  navBarIconClose.style.display = 'none';

  navBarIconOpen.addEventListener('click', function () {
    this.style.display = 'none';
    navBarIconClose.style.display = 'block';
    navBarDisplay('show', nav, navBarItems);
  });

  navBarIconClose.addEventListener('click', function () {
    this.style.display = 'none';
    navBarIconOpen.style.display = 'block';
    navBarDisplay('hide', nav, navBarItems);
  });
}

function navBarDisplay(state, menu, items) {
  if (state === 'show') {
    menu.classList.add('show');
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add('show');
    }
  } else {
    menu.classList.remove('show');
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('show');
    }
  }
}

changeNavBarVisibility()
