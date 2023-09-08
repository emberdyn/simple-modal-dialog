const overlay = document.getElementById('overlay')
const subscribeButton = document.getElementById('subscribeButton')
const closeButton = document.getElementById('close')

subscribeButton.onclick = function () {
  overlay.style.display = 'block'
}

closeButton.onclick = function () {
  overlay.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == overlay) {
    overlay.style.display = 'none'
  }
}
