const myEntry2 = {
  href: 'przedszkolaki-wracaja.html',
  day: 25,
  month: 5,
  year: 2020,
  src: '../img/pencils.jpg',
  alt: 'penc',
  title: 'Przedszkolaki wracają do szkoły',
  description: 'Mauris tristique massa vulputate arcu vestibulum, et consectetur diam pellentesque. Nulla facilisis bibendum turpis, et finibus magna semper at. Phasellus iaculis metus sit amet sagittis auctor. Vestibulum hendrerit augue vel ullamcorper molestie. Nulla eget velit arcu. Morbi id eros quis arcu ornare ultricies. Aenean leo magna, consectetur ut sapien in, efficitur gravida enim. Ut pellentesque metus at orci mollis, quis faucibus diam imperdiet. Maecenas est massa, mollis quis varius ac, fringilla at diam.'
}

const entry2 = new SneakPeek(
  myEntry2.href,
  myEntry2.day,
  myEntry2.month,
  myEntry2.year,
  myEntry2.src,
  myEntry2.alt,
  myEntry2.title,
  myEntry2.description
)

const entry4 = new News(
  myEntry2.href,
  myEntry2.day,
  myEntry2.month,
  myEntry2.year,
  myEntry2.src,
  myEntry2.alt,
  myEntry2.title,
  myEntry2.description
)
