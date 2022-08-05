"use strict"

const startUrl = "https://drive.google.com/u/0/uc?id="
const finishUrl = "&export=download"

const idFlorest = "1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA"
const idRain = "1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2"
const idCoffeeShop = "1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA"
const idFirePlace = "1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB"

export default function Sounds() {
  const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const AlarmClock = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  
  const florest = new Audio(`${startUrl}${idFlorest}${finishUrl}`)
  const rain = new Audio(`${startUrl}${idRain}${finishUrl}`)
  const coffeeShop = new Audio(`${startUrl}${idCoffeeShop}${finishUrl}`)
  const firePlace = new Audio(`${startUrl}${idFirePlace}${finishUrl}`)

  florest.loop = true
  rain.loop = true
  coffeeShop.loop = true
  firePlace.loop = true

  const stopAllSong = () => {
    florest.pause()
    rain.pause()
    coffeeShop.pause()
    firePlace.pause()
  }

  return {
    buttonPress,
    AlarmClock,
    florest,
    rain,
    coffeeShop,
    firePlace,
    stopAllSong
  }
}
