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
  const [commentData, setCommentData] = useState('')

  const API_KEY =process.env.REACT_APP_API_KEY;

  // fetch channel Details
  async function fetchChannelInfo(channelId){
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`)
    const data = await response.json()
    setChannelData(data.items[0])
  };

  const fetchComment=async(videoId)=>{
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&videoId=${videoId}&key=${API_KEY}`)
    let data = await response.json()
    setCommentData(data.items)
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
      fetchComment(videoData.id)
    }
  },[videoData]);

  return (
    <>
    {videoData &&
      <div className="play-video">
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe width="1000" height="600" src={`https://www.youtube.com/embed/${videoData.id}`} title={videoData.snippet.localized.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h4>{videoData.snippet.localized.title}</h4>
        <div className="play-video-info">
          {/* This long code is to meet the codition of string "M" "K" and "views" as function don't return view or like when codition goes in else block */}
          <p>{(videoData.statistics.viewCount)>1000?viewsLikeCount(videoData.statistics.viewCount):(videoData.statistics.viewCount)+"views" } &bull; {moment(videoData.snippet.publishedAt).fromNow()} </p>
          <div>
            <span>
             <img src={like} alt=""></img>{viewsLikeCount(videoData.statistics.likeCount)}
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
        <hr />
        <div className="vid-description">
          <h5>Video Description</h5>
          <p>
            {videoData.snippet.localized.description}
          </p>
          <h5>{videoData.statistics.commentCount} Comments</h5>
          <div id="commentSection">
            {
              commentData? commentData.map((item)=>(
                <div key={item.id}>
                    <div  className="comments">
                      <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                      <div>
                        <h4>
                          {item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                        </h4>
                        <p>
                          {item.snippet.topLevelComment.snippet.textOriginal}
                        </p>
                      </div>
                    </div>
                    <div className="comment-action">
                      <img src={like} alt="likesCount" />
                      <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                      <img className="dislike" src={dislike} alit="dislikeCount"/> 
                    </div>
                  </div>
                    )): <div> No comment</div>
            };
          </div>
        </div>
      </div>
    }
    </>
  );
};

export default PlayVideo;
