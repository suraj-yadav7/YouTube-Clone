import React from 'react'
import home from "../../assets/home.png"
import game_icon from "../../assets/game_icon.png"
import automobiles from "../../assets/automobiles.png"
import sports from "../../assets/sports.png"
import entertainment from "../../assets/entertainment.png"
import tech from "../../assets/tech.png"
import music from "../../assets/music.png"
import blog from "../../assets/blogs.png"
import news from "../../assets/news.png"
import suraj from "../../assets/suraj.png"
import simon from "../../assets/simon.png"
import tom from "../../assets/tom.png"
import megan from "../../assets/megan.png"
import "./sidebar.scss"


const Sidebar = ({sidebarVal}) => {
  console.log("sidebar ",sidebarVal)

  return (
    <div className={`sidebar ${sidebarVal?"":"small-sidebar"}`} >
        <div className='shortcut-links'>
            <div className='side-link'>
                <img src={home} alt="#" /><p>Home</p>
            </div>
            <div className='side-link'>
                <img src={game_icon} alt="#" /><p>Games</p>
            </div>
            <div className='side-link'>
                <img src={automobiles} alt="#" /><p>Automobiles</p>
            </div>
            <div className='side-link'>
                <img src={sports} alt="#" /><p>Sports</p>
            </div>
            <div className='side-link'>
                <img src={entertainment} alt="#" /><p>Entertainment</p>
            </div>
            <div className='side-link'>
                <img src={tech} alt="#" /><p>Technology</p>
            </div>
            <div className='side-link'>
                <img src={music} alt="#" /><p>Music</p>
            </div>
            <div className='side-link'>
                <img src={blog} alt="#" /><p>Blog</p>
            </div>
            <div className='side-link'>
                <img src={news} alt="#" /><p>News</p>
            </div>
        </div>
            <hr/>
        <div className='subscribed-list'>
            <h3>Subscribed List</h3>
            <div className='side-link'>
                <img src={suraj} /><p>Hindi News</p>
            </div>
            <div className='side-link'>
                <img src={simon} /><p>Code with harry</p>
            </div>
            <div className='side-link'>
                <img src={tom} /><p>Thappa Technical</p>
            </div>
            <div className='side-link'>
                <img src={megan} /><p>Chai Aur Code</p>
            </div>
            <div className='side-link'>
                <img src={suraj} /><p>Apna College</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;