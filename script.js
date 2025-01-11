let number = 0
let cron 
let zero = document.querySelector(".zero")

function start() {
  cron = setInterval( function() {
    number++
    zero.innerHTML = number
  }, 1000)
}

function stop() {
  clearInterval(cron)
}
