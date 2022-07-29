if (window.location.pathname.split(`/`).includes(`cpe`)) document.querySelector(`#codepen-link`).remove()

function setHeaderScrollOpacity() {
  const scrollPos = document.documentElement.scrollTop + document.body.scrollTop,
        opacity = document.body.style.getPropertyValue(`--scrollOpacity`)
  
  if (scrollPos < 500 || opacity >= .4) document.body.style.setProperty(`--scrollOpacity`, Math.max(.4, 1 - (scrollPos / 600)))
}

window.addEventListener(`scroll`, setHeaderScrollOpacity)