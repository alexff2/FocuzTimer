"use strict"

import {
  btnPlay,
  btnPause,
  btnStop,
  btnUpTime,
  btnDownTime,
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFireplace,
  cardSongs,
  inputMinutes,
  inputSeconds,
  divTimes,
  btnDefaultTheme,
  btnDarkTheme
} from './elements.js'

export default function Events({ services, tasks, sounds, time, themes }) {
  //Event Time
  btnPlay.addEventListener('click', ()=>{
    sounds.buttonPress.play()
    tasks.disabledInputs()
    services.countDown()
    tasks.togglePlayPause()
    btnStop.classList.remove('desabled')
  })
  btnPause.addEventListener('click', ()=>{
    sounds.buttonPress.play()
    tasks.enableInputs()
    console.log(time.interval)
    clearInterval(time.interval)
    tasks.togglePlayPause()
  })
  btnStop.addEventListener('click', function() {
    if (this.classList[0] !== 'desabled') {
      sounds.buttonPress.play()
      tasks.resetTime()
      clearInterval(time.interval)
      this.classList.add('desabled')
    }
    
    btnPause.classList[0] !== 'hide' && tasks.togglePlayPause()
  })
  btnUpTime.addEventListener('click', ()=>{
    services.updateTime(5, true)
  })
  btnDownTime.addEventListener('click', ()=>{
    services.updateTime(5, false)
  })

  //Event songs
  btnForest.addEventListener('click', function(){
    tasks.playPauseBgAudio(this, 'florest')
    tasks.setColorBtnSong(this, 0)
  })
  btnRain.addEventListener('click', function(){
    tasks.playPauseBgAudio(this, 'rain')
    tasks.setColorBtnSong(this, 1)
  })
  btnCoffeeShop.addEventListener('click', function(){
    tasks.playPauseBgAudio(this, 'coffeeShop')
    tasks.setColorBtnSong(this, 2)
  })
  btnFireplace.addEventListener('click', function(){
    tasks.playPauseBgAudio(this, 'irePlace')
    tasks.setColorBtnSong(this, 3)
  })
  cardSongs.forEach(card => {
    let inputVolume = card.querySelector('input')

    inputVolume.addEventListener('mousemove', function() {
      sounds[card.id].volume = this.value / 100
    })
    inputVolume.addEventListener('change', function() {
      sounds[card.id].volume = this.value / 100
    })
  })

  //Event get inputs
  inputMinutes.addEventListener('keypress', e => {
    e.key === 'Enter' && tasks.getMinutes(e)
    inputSeconds.focus()
  })
  inputSeconds.addEventListener('keypress', e => {
    e.key === 'Enter' && tasks.getSeconds(e)
    e.target.blur()
  })
  inputMinutes.addEventListener('focusout', e => tasks.getMinutes(e))
  inputSeconds.addEventListener('focusout', e => tasks.getSeconds(e))

  //Events Change Themes
  btnDefaultTheme.addEventListener('click', function() {
    tasks.changeThemeColors(themes.dark)
    this.classList.toggle('hide')
    btnDarkTheme.classList.toggle('hide')
  })
  btnDarkTheme.addEventListener('click', function() {
    tasks.changeThemeColors(themes.default)
    this.classList.toggle('hide')
    btnDefaultTheme.classList.toggle('hide')
  })

  //Outhers Events
  inputMinutes.addEventListener('click', () => {
    tasks.helpTextBallon(false)
  })
  inputSeconds.addEventListener('click', () => {
    tasks.helpTextBallon(false)
  })
  divTimes.addEventListener('mouseover', ()=>{
    tasks.helpTextBallon(true, 'Clique! Depois digite o tempo, ou seta pra cima e para baixa para incrementar e decrementar o tempo!')
  })
  divTimes.addEventListener('mouseout', ()=>{
    tasks.helpTextBallon(false)
  })
  btnUpTime.addEventListener('mouseover', ()=>{
    tasks.helpTextBallon(true, 'Adicina 5 minutos ao tempo!')
  })
  btnUpTime.addEventListener('mouseout', ()=>{
    tasks.helpTextBallon(false)
  })
  btnDownTime.addEventListener('mouseover', () =>{
    tasks.helpTextBallon(true, 'Reduz 5 minutos do tempo!')
  })
  btnDownTime.addEventListener('mouseout', () => {
    tasks.helpTextBallon(false)
  })
}