const routes = require('./router')
const appDiv = document.querySelector('#app')

function routerPush (pathName) {
  window.history.pushState({}, pathName, pathName)
  appDiv.innerHTML = routes[pathName]
}

window.popstate = () => {
  appDiv.innerHTML = routes[window.location.pathname]
}

window.onload = () => {
  appDiv.innerHTML = routes[window.location.pathname]

  const linker = document.querySelectorAll('span')

  linker.forEach(el => {
    el.addEventListener('click', (evt) => {
      const pathName = evt.target.getAttribute('route')

      routerPush(pathName)
    })
  })
}
