

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('./songs/1.aac')
let mainPlay = document.getElementById('mainPlay')
let durationBar = document.getElementById('duration-bar')
let volumeBar = document.getElementById('volume-bar')
let volumeIcon = document.getElementById('volume-icn')


let songs = [
    {songName:'Challenge Accepted', filePath: './songs/1.aac', albumArtPath:'albumart/1.jpg'}
]

//handle play pause click
mainPlay.addEventListener('click', ()=>{
    console.log('play-clicked')
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        audioElement.volume = volumeBar.value/100
        mainPlay.innerHTML='pause'

    }
    else{
        audioElement.pause()
        mainPlay.innerHTML='play_circle_filled'
    }
})

//Handle Mute and Unmute
volumeIcon.onclick = function(){
    if(audioElement.muted == true){
        audioElement.muted = false
        volumeIcon.innerHTML = 'volume_up'
        volumeIcon.style.color='#25ffac'
        console.log('unmuted')
    }
    else{
        audioElement.muted = true;
        console.log('muted')
        volumeIcon.innerHTML = 'volume_off'
        volumeIcon.style.color='#F6546A'

    }
    

}




//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update duration-bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    durationBar.value = progress
})

durationBar.addEventListener('change', ()=>{
    audioElement.currentTime = durationBar.value * audioElement.duration/100
})

volumeBar.addEventListener('change', ()=> {
    audioElement.volume = volumeBar.value/100
    console.log(volumeBar.value)
})

