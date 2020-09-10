function AutoPlay() {}

    //Con esto le damos acceso al autoplay
    AutoPlay.prototype.run = function (player) {
        player.mute()
        player.play()
    }

export default AutoPlay