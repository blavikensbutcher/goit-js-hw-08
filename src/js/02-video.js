import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const video = document.querySelector('iframe');
const player = new Player(video)
const KEY = "videoplayer-current-time";

const throttled = throttle(checkTime, 1000)

function checkTime(data) {
    (localStorage.setItem(KEY, data.seconds))
}

let res = player.on('timeupdate', throttled);





player.setCurrentTime(localStorage.getItem(KEY)).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


