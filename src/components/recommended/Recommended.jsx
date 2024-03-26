import React from 'react'
import "./recommended.scss"
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"

const Recommended = () => {
  return (
    <>
        <div className='recommended'>
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

        </div>
    </>
  )
};

export default Recommended;