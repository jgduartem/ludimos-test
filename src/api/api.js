import axios from 'axios'

export const getInitialVideos = async (first, next) => {
    let callOne = await axios.get('https://ludimos-videos-dev.s3.eu-central-1.amazonaws.com/test_jsons/feed_page_1.json')
    let callTwo = await axios.get('https://ludimos-videos-dev.s3.eu-central-1.amazonaws.com/test_jsons/feed_page_2.json')
    const response = callOne.data.data.concat(callTwo.data.data)
    return response.slice(first, next)
}

export const getVideosToCompare = async (idOne, idTwo) => {
    let callOne = await axios.get('https://ludimos-videos-dev.s3.eu-central-1.amazonaws.com/test_jsons/feed_page_1.json')
    let callTwo = await axios.get('https://ludimos-videos-dev.s3.eu-central-1.amazonaws.com/test_jsons/feed_page_2.json')
    const response = callOne.data.data.concat(callTwo.data.data)
    let videos = []
    response.map((video) => {
        if(video.id == idOne || video.id == idTwo)
        videos.push(video)
    })
    return videos
}