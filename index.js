// css
require('./css/style.css')

// router
const {
  initialRoutes,
  historyRouterPush,
  hashRouterPush
} = require('./router')

// app division
const historyAppDiv = document.querySelector('#history-app')
const hashAppDiv = document.querySelector('#hash-app')

// Browser History
initialRoutes('history', historyAppDiv)

// Hash History
initialRoutes('hash', hashAppDiv)

window.onload = () => {
  const linker = document.querySelectorAll('span.history')
  const linker2 = document.querySelectorAll('a.hash')

  linker.forEach(el => {
    el.addEventListener('click', (evt) => {
      const pathName = evt.target.getAttribute('route')

      historyRouterPush(pathName, historyAppDiv)
    })
  })

  linker2.forEach(el => {
    el.addEventListener('click', (evt) => {
      const pathName = evt.target.getAttribute('route')

      hashRouterPush(pathName, hashAppDiv)
    })
  })
}
