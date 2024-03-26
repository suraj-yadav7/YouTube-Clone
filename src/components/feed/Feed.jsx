import React, { useState } from 'react'
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import "./feed.scss"
import { Link } from 'react-router-dom'
import FeedContainer from './FeedContainer'

const Feed = ({category}) => {
const [popularVideo, setPopularVideo]=useState(0);
    // API key 
    const API_KEY =process.env.REACT_APP_API_KEY;
    console.log("API KEY: ", API_KEY);
    
    const getPopularVideos = async()=>{
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`)
        
        let data = await response.json()
        console.log("reponse: ", data);
        if(data){
            setPopularVideo(data.items)
        }
        else{
            console.log("data is empty")
            console.log("Need to resolve issues")
            console.log("once check th API key")
            console.log("remove '' api key")
            console.log("Problem resolved")
        }
    };
    console.log("initial set state data: ", popularVideo)

  return (
    <>
    <div className='feed'>
        {popularVideo?
        popularVideo.map((item)=>(
            <FeedContainer key={item.id} item={item}/>
            )
          ):
            <div className='feed'>
            <button onClick={getPopularVideos} >fetch demo</button>
        <Link to="/video/01/10" className='card'>
            <img src={thumbnail1} alt="#" />
            <h3> First demo video check</h3>
            <h4>video1</h4>
            <p>100k views &bull; 2 days ago</p>
        </Link>
        <div className='card'>
            <img src={thumbnail2} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail3} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail4} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail5} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail6} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail7} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>        <div className='card'>
            <img src={thumbnail8} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail1} alt="#" />
            <h3> This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail2} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail3} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail4} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail5} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail6} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail7} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>        <div className='card'>
            <img src={thumbnail8} alt="#" />
            <h3>This is best channel to learn about fitness</h3>
            <h4>Guru Mann</h4>
            <p>100k views &bull; 2 days ago</p>
        </div>
        </div>
        }
    </div>
    </>
  )
};

export default Feed;