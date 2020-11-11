/* Importamos la funcionalidad de Mediaplayer para tener mejor
relacionados y visualizados los archivos */
import Mediaplayer from './MediaPlayer.js'
/* Importamos la funcionalidad de AutpPlay para tener mejor
relacionados y visualizados los archivos */
import AutoPlay from './plugins/AutoPlay.js'
/* Importamos la funcionalidad de AutoPause para tener mejor
relacionados y visualizados los archivos */
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video")
const player =  new Mediaplayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] })

const playButton = document.querySelector('#playButton')
playButton.onclick = () => player.togglePlay()

const muteButton = document.querySelector('#muteButton')
muteButton.onclick = () => player.toggleMute()

