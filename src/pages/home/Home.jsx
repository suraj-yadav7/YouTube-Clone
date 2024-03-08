import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import './home.scss'

const Home = ({sidebarVal}) => {
  console.log("home ",sidebarVal)
  return (
    <div>
      <Sidebar sidebarVal={sidebarVal} />
      <div className={`container ${sidebarVal?"":'large-container'}`}>
        <Feed />
      </div>
    </div>
  )
};

export default Home;