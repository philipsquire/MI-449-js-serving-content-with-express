const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.set('view engine', 'ejs')

app.use(express.static('public'))

const pages = {}

app.get('/', function (request, response) {
  response.render('pages/index', {
    pages: pages
  })
})

app.get('/jojo', function (request, response) {
  response.render('pages/jojo', {
    pages: pages
  })
})

app.get('/baccano', function (request, response) {
  response.render('pages/baccano', {
    pages: pages
  })
})

app.get('/kino', function (request, response) {
  response.render('pages/kino', {
    pages: pages
  })
})

function createPage (page) {
  const id = Object.keys(pages).length
  pages[id] = page
}

createPage({
  name: 'Home',
  content: '',
  picture: '',
  outlink: '',
  link: '<a href = "/">Home</a>'
})

createPage({
  name: 'Jojo\'s Bizarre Adventure',
  content: 'You probably have one friend who worships this series. Listen to him, but maybe keep a nice bottle of your preferred booze around (only if you drink).',
  picture: '<img src="/images/jojo.jpg" alt="Jojo Protagonists">',
  outlink: '<a href = "https://anidb.net/anime/9304">AniDB</a>',
  link: '<a href = "/jojo">Jojo</a>'
})

createPage({
  name: 'Baccano',
  content: 'From the Italian for "ruckus", you get an anime that could be very much be described as one. Prohibition-era gangsters mixed with immortality and presented out of chronological order. What\'s not to love? The only crime that matters is that the subsequent novels in the series didn\'t get animated.',
  picture: '<img source = "/images/baccano.png" alt="Cast of Baccano">',
  outlink: '<a href = "https://anidb.net/anime/4897">AniDB</a>',
  link: '<a href = "/baccano">Baccano</a>'
})

createPage({
  name: 'Kino\'s Journey',
  content: 'This one is special, as it has a specific format that works wonders. Each episode, the titular Kino and her talking motorcycle, Hermes, go to a different country (city-states) based around a certain theme or concept. They are only allowed to stay for a couple of days, and then they must leave. It\'s  a beautiful anthology series that should not be missed. Just make sure you watch the 2003 version and not the new one, as they left it up to the fans to pick their favourite stories, and it did not end well.',
  picture: '<img source = "/images/kino.jpg" alt="Kino, the main character">',
  outlink: '<a href = "https://anidb.net/anime/575">AniDB</a>',
  link: '<a href = "/kino">Kino</a>'
})

app.listen(port)
