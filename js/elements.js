"use strict"

const labelTimer = document.querySelector('.timers label')
const divTimes = document.querySelector('.inputsTime')
const screenStartTime = document.querySelector('.startTime strong')
// timers
const inputMinutes = document.querySelector('#minutes')
const inputSeconds = document.querySelector('#seconds')

// buttons timer
const btnPause = document.querySelectorAll('.timers .buttons svg')[0]
const btnPlay = document.querySelectorAll('.timers .buttons svg')[1]
const btnStop = document.querySelectorAll('.timers .buttons svg')[2]
const btnUpTime = document.querySelectorAll('.timers .buttons svg')[3]
const btnDownTime = document.querySelectorAll('.timers .buttons svg')[4]

// buttons songs
let elSvgSong = '.songs div svg'
const svgSongs = document.querySelectorAll(elSvgSong)
const btnForest = document.querySelectorAll(elSvgSong)[0]
const btnRain = document.querySelectorAll(elSvgSong)[1]
const btnCoffeeShop = document.querySelectorAll(elSvgSong)[2]
const btnFireplace = document.querySelectorAll(elSvgSong)[3]
//
const cardSongs = document.querySelectorAll('.songs div')

//buttons themes
const btnDefaultTheme = document.querySelectorAll('.btnThemeMode svg')[0]
const btnDarkTheme = document.querySelectorAll('.btnThemeMode svg')[1]

export {
  labelTimer,
  divTimes,
  screenStartTime,
  inputMinutes,
  inputSeconds,
  btnPause,
  btnPlay,
  btnStop,
  btnUpTime,
  btnDownTime,
  svgSongs,
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFireplace,
  cardSongs,
  btnDefaultTheme,
  btnDarkTheme
}