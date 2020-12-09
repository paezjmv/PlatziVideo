class MediaPlayer {
  media: HTMLMediaElement
  plugins: Array<any>

  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this.initPlugins()
  }
  //Metodo solo para uso interno de la funcion "padre"
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }

  play() {
    this.media.play()
  }

  pause() {
    this.media.pause()
  }

  togglePlay() {
    if (this.media.paused) {
      this.play()
    } else {
      this.pause()
    }
  }

  mute() {
    this.media.muted = true
  }

  unmute() {
    this.media.muted = false
  }

  toggleMute() {
    this.media.muted = !this.media.muted
  }
}

/* Exportamos la funcion para poderla utilizar en el index.js */
  export default MediaPlayer