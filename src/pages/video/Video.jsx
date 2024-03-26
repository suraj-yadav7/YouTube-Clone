import React, { useEffect, useState } from 'react'
import PlayVideo from '../playvideo/PlayVideo'
import "./video.scss"
import Recommended from '../../components/recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const [singleVideoData, setSingleVideoData] = useState(0)
  const params  = useParams()
  // fetching single video details
  const videoFetch=async(categoryId, videoId)=>{
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&videoCategoryId=${categoryId}&key=AIzaSyAMSbz2RO6c_UW0ueOA9qnR-UGIKtZxHz0`)
    let data = await response.json()
    if(data){
      setSingleVideoData(data)
    }
    else{
      console.log("data is not fetched properly");
    }
  };

  useEffect(()=>{
      videoFetch(params.categoryId, params.videoId);
  },[])
  return (
    <div className='play-container'>
        <PlayVideo videoData={singleVideoData} />
        <Recommended />
    </div>
  )
}

export default Video;