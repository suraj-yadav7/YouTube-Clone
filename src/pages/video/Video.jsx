import React, { useEffect, useState } from 'react'
import PlayVideo from '../playvideo/PlayVideo'
import "./video.scss"
import Recommended from '../../components/recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const [singleVideoData, setSingleVideoData] = useState('')
  const [recommData, setRecommData] =  useState('');

  const params  = useParams()
  const API_KEY =process.env.REACT_APP_API_KEY;

  // fetching single video details
  const videoFetch=async(categoryId, videoId)=>{
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&videoCategoryId=${categoryId}&key=${API_KEY}`);

    let recommendedResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`)

    let recommendedData = await recommendedResponse.json()
    let data = await response.json()
    if(data){
      setSingleVideoData(data.items[0])
    }
    if(recommendedData){
      setRecommData(recommendedData)
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
        <Recommended recommVideoList={recommData}/>
    </div>
  )
}
export default Video;