let api_key = 'AIzaSyCxZUdE9PXCG3-28x9ZiEGW0nmKtsm1K30'
let video_http = 'GET https://www.googleapis.com/youtube/v3/search?'
let channel_http = 'GET https://www.googleapis.com/youtube/v3/channels'

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snipet',
    chart: 'mostPopular',
    maxResult:2,
    regionCode :'IN'
}))
.then(res=> res.json())
.then(data => {
    console.log(data)
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})

const getChannelIcon = (data) => {
    fetch(channel_http+ new URLSearchParams({
        key: api_key,
        part:'snippet',
        id: video_data.snippet.channelID
    }))
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })

}