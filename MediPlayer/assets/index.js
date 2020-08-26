/* Importamos la funcionalidad de Mediaplayer para tener mejor
relacionados y visualizados los archivos */
import Mediaplayer from './MediaPlayer.js'

const video = document.querySelector("video")
const player = new Mediaplayer({el = video})
const button = document.querySelector("button")
button.onclick = () => player.play()

