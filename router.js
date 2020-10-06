const homeTemplate = require('./pages/home.hbs')
const aboutTemplate = require('./pages/about.hbs')
const Home = homeTemplate()
const About = aboutTemplate()

module.exports = {
  '/': Home,
  '/home': Home,
  '/about': About
}
