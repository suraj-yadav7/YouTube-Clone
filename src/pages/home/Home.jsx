import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import './home.scss'

const Home = ({sidebarVal}) => {
  const [category, setCategory] = useState(0)
  console.log("category: ", category)
  return (
    <div>
      <Sidebar sidebarVal={sidebarVal} category={category} setCategory={setCategory} />
      <div className={`container ${sidebarVal?"":'large-container'}`}>
        <Feed category={category}  />
      </div>
    </div>
  )
};

export default Home;