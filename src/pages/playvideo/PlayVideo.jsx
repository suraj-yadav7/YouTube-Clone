import React from 'react'
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import suraj from "../../assets/suraj.png"
import "./playvideo.scss"

const PlayVideo = () => {
  return (
    <>
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h4>Best place to learn web developemnet</h4>
            <div className='play-video-info'>
              <p>1525  &bull; 3 days ago</p>
              <div>
                <span><img src={like} alt=""></img></span>
                <span><img src={dislike} alt=""></img></span>
                <span><img src={share} alt=""></img></span>
                <span><img src={save} alt=""></img></span>
              </div>
            </div>
        </div>
    </>
  )
}

export default PlayVideo