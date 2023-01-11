const displayMusic = document.querySelector('audio');
const displayVideo = document.querySelector('video');

const play = document.querySelector('.play');
const stop = document.querySelector('.pause');
const videoPlay = document.querySelector('.card-img')
const text1 = document.querySelector('h2') 
 


play.addEventListener('click', () => {
    displayMusic.play()
    playVideo()

    play.classList.add('hide')
    stop.classList.remove('hide')

    text1.textContent = "Isaias 9"
    
}) 

stop.addEventListener('click', () => {
    displayMusic.pause()
    pauseVideo()

    stop.classList.add('hide')
    play.classList.remove('hide')
})

const playVideo = () => {
    displayVideo.play()

    displayVideo.classList.remove('hide')
    videoPlay.classList.add('hide')
}

const pauseVideo = () =>{
    displayVideo.pause()
}




