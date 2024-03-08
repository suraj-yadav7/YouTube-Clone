import React from 'react';
import menu_icon from "../../assets/menu.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/suraj.png";
import logo from "../../assets/logo.png"
import "./navbar.scss"

const Navbar = ({setSidebarVal}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' src={menu_icon}  onClick={()=> setSidebarVal((prev)=> prev==true?false:true)} alt="menu-icon" />
            <img className='logo' src={logo} alt="" />
        </div>
        <div className='nav-middle'>
          <div className='search-box flex-div'>
            <input type='text' placeholder='search'/>
            <img className=" " src={search_icon}></img>
          </div>
            
        </div>
        <div className='nav-right flex-div'>
            <img src={upload_icon} alt="#" />
            <img src={more_icon} alt="#" />
            <img src={notification_icon} alt="#" />
            <img src={profile_icon} alt="#"  className='user-icon'/>
        </div>
        
    </nav>
  )
};

export default Navbar;