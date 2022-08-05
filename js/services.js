import {
  inputMinutes, inputSeconds, divTimes
} from './elements.js'
import Sounds from './sounds.js'

const sounds = Sounds()

export default function Services({ time, tasks }) {
  const updateTime = (value, somar) => {
    let minuteInput = Number(inputMinutes.value)
    minuteInput = somar ? minuteInput + value : minuteInput - value

    if (minuteInput < 0) {
      return
    }

    inputMinutes.value = String(minuteInput).padStart(2, "0")
  
    let minute = Number(time.minutes)
    minute = somar ? minute + value : minute - value
    time.minutes = String(minute).padStart(2, "0")

    tasks.setStartTime()
  }

  const countDownFinish = () => {
    divTimes.classList.toggle('shake')
    sounds.AlarmClock.play()
    setTimeout(() => {
      divTimes.classList.toggle('shake')
      tasks.resetTime()
      tasks.togglePlayPause()
    }, 2500)
  }

  const countDown = () => {
    time.interval = setInterval(()=>{
      let seconds = Number(inputSeconds.value)
      let minutes = Number(inputMinutes.value)

      if (seconds === 0 && minutes === 0) {
        clearInterval(time.interval)
        countDownFinish()
        return
      }

      if (seconds === 0 ) {
        seconds = 60
        minutes--
        inputMinutes.value = String(minutes).padStart(2, "0")
      }
      seconds--
      inputSeconds.value = String(seconds).padStart(2, "0")
    }, 1000)
  }

  return { updateTime, countDown }
}