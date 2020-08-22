function Mediaplayer(config) {
  this.media = config.el
}

Mediaplayer.prototype.play = function() {
  this.media.play()
}

Mediaplayer.prototype.pause = function() {
    this.media.pause()
}

Mediaplayer.prototype.togglePlay = function() {
    if (this.media.pause()) {
        this.play()
    } else {
        this.pause()
    }
}  


const video = document.querySelector("video")
const player = new Mediaplayer({el = video})
const button = document.querySelector("button")
button.onclick = () => player.play()

