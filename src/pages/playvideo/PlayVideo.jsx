import React, { useEffect, useState } from "react";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import tom from "../../assets/tom.png";
import "./playvideo.scss";
import moment from "moment";
const PlayVideo = ({videoData}) => {
  const [channelData, setChannelData] = useState('')

  const API_KEY =process.env.REACT_APP_API_KEY;

  // fetch channel Details
  async function fetchChannelInfo(channelId){
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`)
    const data = await response.json()
    setChannelData(data.items[0])
  };

  // function which count likes and views
  const viewsLikeCount =(val)=>{
    if(val>=1000000){
      return (Math.floor(val)/1000000).toFixed(1)+"M"
    }
    else if(val>=1000){
      return (Math.floor(val)/1000).toFixed(1)+"K"
    }
    else{
      return val;
    }
  };
  
  useEffect(()=>{
    if(videoData){
      fetchChannelInfo(videoData.snippet.channelId)
    }
  },[videoData]);

  return (
    <>
    {videoData &&
      <div className="play-video">
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe width="1200" height="640" src={`https://www.youtube.com/embed/${videoData.id}`} title={videoData.snippet.localized.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h4>{videoData.snippet.localized.title}</h4>
        <div className="play-video-info">
          {/* This long code is to meet the codition of string "M" "K" and "views" as function don't return view or like when codition goes in else block */}
          <p>{(videoData.statistics.viewCount)>1000?viewsLikeCount(videoData.statistics.viewCount):(videoData.statistics.viewCount)+"views" } &bull; {moment(videoData.snippet.publishedAt).fromNow()} </p>
          <div>
            <span>
            {viewsLikeCount(videoData.statistics.likeCount) } <img src={like} alt=""></img>100
            </span>
            <span>
              <img src={dislike} alt=""></img>10
            </span>
            <span>
              <img src={share} alt=""></img>12
            </span>
            <span>
              <img src={save} alt=""></img>6
            </span>
          </div>
        </div>
        <hr />
        {/* Channel info div */}
        {
          channelData && 
        <div className="publisher">
          
          <img src={channelData.snippet.thumbnails.medium.url} />
          <div>
            <p>{channelData.snippet.localized.title}</p>
            <span>{viewsLikeCount(channelData.statistics.subscriberCount)} Subscriber</span>
          </div>
          <button>Subscriber</button>
        </div>
          }
        <div className="vid-description">
          <p>Video Description</p>
          <p>
            {videoData.snippet.localized.description}
          </p>
          <hr />
          <h4>{videoData.statistics.commentCount} Comments</h4>
          <div className="comments">
            <img src={tom} />
            <div>
              <h4>
                Tom cruise <span>2 days ago</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                provident.
              </p>
            </div>
          </div>
          <div className="comment-action">
            <img src={like} alt="" />
            <spna>250</spna>
            <img className="dislike" src={dislike} alit=""/> 
            <span>12</span>
          </div>
          <div className="comments">
            <img src={tom} />
            <div>
              <h4>
                Tom cruise <span>2 days ago</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                provident.
              </p>
            </div>
          </div>
          <div className="comment-action">
            <img src={like} alt="" />
            <spna>250</spna>
            <img className="dislike" src={dislike} alit=""/> 
            <span>12</span>
          </div>
          <div className="comments">
            <img src={tom} />
            <div>
              <h4>
                Tom cruise <span>2 days ago</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                provident.
              </p>
            </div>
          </div>
          <div className="comment-action">
            <img src={like} alt="" />
            <spna>250</spna>
            <img className="dislike" src={dislike} alit=""/> 
            <span>12</span>
          </div>
          <div className="comments">
            <img src={tom} />
            <div>
              <h4>
                Tom cruise <span>2 days ago</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                provident.
              </p>
            </div>
          </div>
          <div className="comment-action">
            <img src={like} alt="" />
            <spna>250</spna>
            <img className="dislike" src={dislike} alit=""/> 
            <span>12</span>
          </div>
        </div>
      </div>
  }
    </>
  );
};

export default PlayVideo;
