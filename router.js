const homeTemplate = require('./pages/home.hbs')
const Home = Handlebars.compile(homeTemplate)
const routes = [
  { '/': Home }
]
