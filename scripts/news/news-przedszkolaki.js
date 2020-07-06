const myEntry = {
  href: 'przedszkolaki.html',
  day: 20,
  month: 4,
  year: 2020,
  src: '../img/edu.jpg',
  alt: 'lala',
  title: 'Przedszkolaki',
  description: 'Lorem ipsum.',
}

console.log('lala')

const entry1 = new SneakPeek(
  myEntry.href,
  myEntry.day,
  myEntry.month,
  myEntry.year,
  myEntry.src,
  myEntry.alt,
  myEntry.title,
  myEntry.description
)

const entry3 = new News(
  myEntry.href,
  myEntry.day,
  myEntry.month,
  myEntry.year,
  myEntry.src,
  myEntry.alt,
  myEntry.title,
  myEntry.description
)

// const entry1 = new SneakPeek(
//   'przedszkolaki.html',
//   20,
//   4,
//   2020,
//   '../img/edu.jpg',
//   'lala',
//   'Przedszkolaki',
//   'Lorem ipsum.'
// )

// console.log(entry1)

// const entry2 = new SneakPeek(
//   'przedszkolaki-wracaja.html',
//   25,
//   5,
//   2020,
//   '../img/pencils.jpg',
//   'penc',
//   'Przedszkolaki wracają do szkoły',
//   'Mauris tristique massa vulputate arcu vestibulum, et consectetur diam pellentesque. Nulla facilisis bibendum turpis, et finibus magna semper at. Phasellus iaculis metus sit amet sagittis auctor. Vestibulum hendrerit augue vel ullamcorper molestie. Nulla eget velit arcu. Morbi id eros quis arcu ornare ultricies. Aenean leo magna, consectetur ut sapien in, efficitur gravida enim. Ut pellentesque metus at orci mollis, quis faucibus diam imperdiet. Maecenas est massa, mollis quis varius ac, fringilla at diam.'
// )
