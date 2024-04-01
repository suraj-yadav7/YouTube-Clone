import React from 'react'
import "./feed.scss"
import "./feedContainer.scss"
import { Link } from 'react-router-dom';
import moment from 'moment';

const FeedContainer = ({item, key}) => {

  // converting views-count into thousands "k" and Millions "M"
  function kToMillion(val){
    if(val>1000000){
      return (Math.floor(val)/1000000).toFixed(1)+"M"
    }
    if(val>1000){
      return (Math.floor(val)/1000).toFixed(1)+"k"
    }
    else{
      return val+"views"
    }
  };

  return (
    <>
    <div className='feed'>
      <Link to={`/video/${item.snippet.categoryId}/${item.id}`} >
        <div className='card' id={key}>
            <img src={item.snippet.thumbnails.default.url} alt="#" />
            <h4>{item.snippet.localized.title.substring(0,50)}</h4>
            <p className='channelTitle'>{item.snippet.channelTitle}</p>
            <p>{kToMillion(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </div>
      </Link>
    </div>
    </>
  )
};

export default FeedContainer;