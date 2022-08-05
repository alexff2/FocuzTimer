import Sounds from './sounds.js'
import Services from './services.js'
import Tasks from './tasks.js'
import Events from './events.js'
import  {
  inputMinutes,
  inputSeconds,
} from './elements.js'

//global variables
const time = {
  minutes: inputMinutes.value,
  seconds: inputSeconds.value,
  interval: undefined
}
const themes = {
  default: {
    bg: '#FFF',
    fc: '#323238',
    bgBtnSong: '#E1E1E6',
    hoverColor: '#02799D'
  },
  dark: {
    bg: '#121214',
    fc: '#FFF',
    bgBtnSong: '#29292E',
    hoverColor: '#02799D'
  }
}

//Factore
const sounds = Sounds()
const tasks = Tasks({ time, sounds })
const services = Services({ time, tasks })

Events({services, tasks, sounds, time, themes})

//Call functions
tasks.setStartTime()
tasks.setColorAllBtn()