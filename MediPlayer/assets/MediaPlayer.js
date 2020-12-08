class Mediaplayer {
  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins()
  }
  //Metodo solo para uso interno de la funcion "padre"
  _initPlugins() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      //utilizamos getter para obtener una funcion virtual
      get muted() {
        return this.media.muted
      },
      //setter para cambiar el estado de muted
      set muted(value) {
        this.media.muted = value
      }
    }

    this.plugins.forEach(plugin => {
      plugin.run(player)
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
  export default Mediaplayer