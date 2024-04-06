import React from 'react'
import "./recommended.scss"
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import { Link } from 'react-router-dom'

const Recommended = ({recommVideoList}) => {

    function kToMillion(val){
        if(val>1000000){
          return (Math.floor(val)/1000000).toFixed(1)+"M"
        }
        if(val>1000){
          return (Math.floor(val)/1000).toFixed(1)+"k"
        }
        else{
          return val+"views";
        }
    };

    // when user click on below card recommend  it will scroll to top
    const gotoTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

  return (
    <>
      <div className='recommended'>
    {
        // when object props "recommVideoList" don't have error load below div
        recommVideoList?
        recommVideoList.items.map((item)=> (
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={item.id} >
            <div className="recomVideo" onClick={gotoTop}>
                <img src={item.snippet.thumbnails.medium.url} alt=""/>
                <div className='video-info'>
                    <h4 className='headingRecomm'>{item.snippet.localized.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                    <p>{kToMillion(item.statistics.viewCount)} views</p>
                </div>
            </div>
            </Link>
        ))
        :
            <div >
            <div className='side-video-list'>
                <img src={thumbnail1} alt=""/>
                <div className='video-info'>
                    <h4>Learn mern stack with 2 projects and with free notes of important concepts</h4>
                    <p>Great Learning</p>
                    <p>152k Views</p>
                </div>
            </div>
            <div className='side-video-list'>
                <img src={thumbnail2} alt=""/>
                <div className='video-info'>
                    <h4>Learn mern stack with 2 projects</h4>
                    <p>Great Learning</p>
                    <p>152k Views</p>
                </div>
            </div>
            <div className='side-video-list'>
                <img src={thumbnail3} alt=""/>
                <div className='video-info'>
                    <h4>Learn mern stack with 2 projects</h4>
                    <p>Great Learning</p>
                    <p>152k Views</p>
                </div>
            </div>
            <div className='side-video-list'>
                <img src={thumbnail4} alt=""/>
                <div className='video-info'>
                    <h4>Learn mern stack with 2 projects</h4>
                    <p>Great Learning</p>
                    <p>152k Views</p>
                </div>
            </div>
            <div className='side-video-list'>
                <img src={thumbnail5} alt=""/>
                <div className='video-info'>
                    <h4>Learn mern stack with 2 projects</h4>
                    <p>Great Learning</p>
                    <p>152k Views</p>
                </div>
            </div>
            <div className='side-video-list'>
                <img src={thumbnail6} alt=""/>
                <div className='video-info'>
                    <h4>Learn mern stack with 2 projects</h4>
                    <p>Great Learning</p>
                    <p>152k Views</p>
                </div>
            </div>
        </div>

        }
        </div>
    </>
  )
};

export default Recommended;