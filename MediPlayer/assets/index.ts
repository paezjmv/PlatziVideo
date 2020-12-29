/* Importamos la funcionalidad de Mediaplayer para tener mejor
relacionados y visualizados los archivos */
import MediaPlayer from './MediaPlayer'
/* Importamos la funcionalidad de AutpPlay para tener mejor
relacionados y visualizados los archivos */
import AutoPlay from './plugins/AutoPlay'
/* Importamos la funcionalidad de AutoPause para tener mejor
relacionados y visualizados los archivos */
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const video = document.querySelector("video")
const player =  new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()] })

const playButton: HTMLMediaElement = document.querySelector('#playButton')
playButton.onclick = () => player.togglePlay()

const muteButton: HTMLMediaElement = document.querySelector('#muteButton')
muteButton.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}
