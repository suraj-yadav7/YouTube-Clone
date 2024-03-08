import React from 'react'
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

const Feed = () => {
  return (
    <>
    <div className='feed' >
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
    </>
  )
};

export default Feed;