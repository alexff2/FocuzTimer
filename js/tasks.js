"use strict"

import  {
  screenStartTime,
  inputMinutes,
  inputSeconds,
  btnPause,
  btnPlay,
  svgSongs,
  labelTimer
} from './elements.js'

export default function tasks({ time, sounds }) {
  const getMinutes = e => {
    time.minutes = e.target.value.padStart(2, "0")
    e.target.value = e.target.value.padStart(2, "0")
    setStartTime()
  }
  const getSeconds = e => {
    time.seconds = e.target.value.padStart(2, "0")
    e.target.value = e.target.value.padStart(2, "0")
    setStartTime()
  }
  const disabledInputs = () => {
    inputMinutes.disabled = true
    inputSeconds.disabled = true
  }
  const enableInputs = () => {
    inputMinutes.disabled = false
    inputSeconds.disabled = false
  }
  const togglePlayPause = () => {
    btnPlay.classList.toggle('hide')
    btnPause.classList.toggle('hide')
  }
  const setStartTime = () => {
    screenStartTime.textContent = `${time.minutes} : ${time.seconds}`
  }
  const resetTime = () => {
    inputMinutes.value = time.minutes
    inputSeconds.value = time.seconds
    enableInputs()
  }
  const setColorBtnSong = (element, index) => {
    setColorAllBtn(index)
  
    const paths = element.querySelectorAll('path')
  
    paths.forEach((path, i) => {
      i === 0
        ? path.classList.toggle('pathOneColorHover')
        : path.classList.toggle('pathTwoColorHover')
    })
  }
  const setColorAllBtn = (index) => {
    svgSongs.forEach((svg, i) => {
      if (index !== i) {
        const paths = svg.querySelectorAll('path')
    
        paths.forEach((path, i) => {
          path.removeAttribute('class')
          i === 0 
            ? path.classList.add('pathOneColor')
            : path.classList.add('pathTwoColor')
        })
      }
    })
  }
  const playPauseBgAudio = (element, bgAudio) => {
    if(element.querySelectorAll('path')[0].classList[1] === undefined) {
      sounds.stopAllSong()
      sounds[bgAudio].play()
      sounds[bgAudio].volume = 0.5
    } else {
      sounds[bgAudio].pause()
    }
  }
  const helpTextBallon = (open, text='') => {
    labelTimer.textContent = text
    open
      ? labelTimer.classList.remove('hide')
      : labelTimer.classList.add('hide')
  }
  const changeThemeColors = ({ bg, fc, bgBtnSong, hoverColor}) => {
    console.log(bg, fc, bgBtnSong, hoverColor)
    document.body.style.setProperty('--bg', bg)
    document.body.style.setProperty('--fc', fc)
    document.body.style.setProperty('--bg-btn-song', bgBtnSong)
    document.body.style.setProperty('--hover-color', hoverColor)
  }

  return {
    getMinutes, 
    getSeconds,
    disabledInputs,
    enableInputs,
    togglePlayPause,
    setStartTime,
    resetTime,
    setColorBtnSong,
    setColorAllBtn,
    playPauseBgAudio,
    helpTextBallon,
    changeThemeColors
  }
}