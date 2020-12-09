import Mediaplayer from "../MediaPlayer"

import MediaPlayer from '../MediaPlayer'

class AutoPlay {
    constructor() { }
    //Con esto le damos acceso al autoplay
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true
        }
        player.play()
    }
}


export default AutoPlay