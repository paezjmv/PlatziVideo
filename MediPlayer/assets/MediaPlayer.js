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

/* Exportamos la funcion para poderla utilizar en el index.js */
  export default Mediaplayer