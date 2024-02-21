/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnails1 from '../../assets/thumbnail1.png'
import thumbnails2 from '../../assets/thumbnail2.png'
import thumbnails3 from '../../assets/thumbnail3.png'
import thumbnails4 from '../../assets/thumbnail4.png'
import thumbnails5 from '../../assets/thumbnail5.png'
import thumbnails6 from '../../assets/thumbnail6.png'
import thumbnails7 from '../../assets/thumbnail7.png'
import thumbnails8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY, valueConverter } from '../../data'
import moment from 'moment'

const Feed = ({ category }) => {

  const [data, setData] = useState([])

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`

    await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
  }

  useEffect(() => {
    fetchData();
  }, [category])

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
            <img src={item.snippet.thumbnails.medium.url} alt="" />

            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        )
      })}

    </div>
  )
}

export default Feed