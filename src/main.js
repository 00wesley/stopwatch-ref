//selecionar os elementos
const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')
const milisecondsElement = document.querySelector('#miliseconds')
const startBtn = document.querySelector('#start-btn')
const pauseBtn = document.querySelector('#pause-btn')
const resumeBtn = document.querySelector('#resume-btn')
const resetBtn = document.querySelector('#reset-btn')

let interval;
let minutes = 0
let seconds = 0
let miliseconds = 0
let inPaused = false

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTime)
resumeBtn.addEventListener('click', resumeTime)
resetBtn.addEventListener('click', resetTimer)

function startTimer () {
  interval = setInterval (() => {
    if(!inPaused) {
      miliseconds += 10

      if (miliseconds === 1000) {
        seconds++
        miliseconds = 0
      }

      if (seconds === 60) {
        minutes++
        seconds = 0
      }

      minutesElement.textContent =formatTime(minutes) 
      secondsElement.textContent = formatTime(seconds)
      milisecondsElement.textContent = formatMiliseconds(miliseconds)
    }
  }, 10)

  startBtn.style.display = 'none'
  pauseBtn.style.display = 'block'
}

function pauseTime () {
  inPaused = true
  pauseBtn.style.display = 'none'
  resumeBtn.style.display = 'block'
}

function resumeTime () {
  inPaused = false
  pauseBtn.style.display = 'block'
  resumeBtn.style.display = 'none'
}

function formatTime (time) {
  return time < 10 ? `0${time}` : time;
}

function formatMiliseconds (time) {
  return time < 100 ? `${time}`.padStart (3, "0") : time
}

function resetTimer () {
  clearInterval(interval)
  minutes = 0
  seconds = 0
  miliseconds = 0

  startBtn.style.display = 'block'
  pauseBtn.style.display = 'none'
  resumeBtn.style.display = 'none'

  minutesElement.textContent = "00"
  secondsElement.textContent = "00"
  milisecondsElement.textContent = "000"
}