import React from "react";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import tom from "../../assets/tom.png";
import "./playvideo.scss";

const PlayVideo = ({videoData}) => {
  console.log("single video data in child container: ", videoData)
  return (
    <>
      <div className="play-video">
        <video src={video1} controls autoPlay muted></video>
        <h4>{videoData.items[0].snippet.localized.title}</h4>
        <div className="play-video-info">
          <p>1525 &bull; 3 days ago</p>
          <div>
            <span>
              <img src={like} alt=""></img>100
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
        <div className="publisher">
          <img src={jack} />
          <div>
            <p>learn web dev</p>
            <span>1M Subscriber</span>
          </div>
          <button>Subscriber</button>
        </div>
        <div className="vid-description">
          <p>You have landed on best channel</p>
          <p>
            You can learn web development fastly because the contnent is
            provided with best examples and assignments
          </p>
          <hr />
          <h4>Comments</h4>
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
    </>
  );
};

export default PlayVideo;
