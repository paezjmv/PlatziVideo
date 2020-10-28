function Mediaplayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins()
  }

  //Metodo solopara uso interno de la funcion "padre"
  Mediaplayer.prototype._initPlugins = function () {
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
    });
  }
  
  Mediaplayer.prototype.play = function() {
    this.media.play()
  }
  
  Mediaplayer.prototype.pause = function() {
      this.media.pause()
  }
  
  Mediaplayer.prototype.togglePlay = function() {
    if (this.media.paused) {
      this.play()
    } else {
      this.pause()
    } 
  }

   Mediaplayer.prototype.mute = function () {
    this.media.muted = true
  }

  Mediaplayer.prototype.unmute = function () {
    this.media.muted = false
  }

  Mediaplayer.prototype.toggleMute = function () {
    this.media.muted = !this.media.muted
  }

/* Exportamos la funcion para poderla utilizar en el index.js */
  export default Mediaplayer