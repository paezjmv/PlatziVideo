function AutoPlay() {}

    //Con esto le damos acceso al autoplay
    AutoPlay.prototype.run = function (player) {
        if (!player.muted) {
            player.muted = true
        }
        player.play()
    }

export default AutoPlay