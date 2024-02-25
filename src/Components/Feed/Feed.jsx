import { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
  //   await fetch(videoList_url)
  //     .then((response) => response.json())
  //     .then((data) => setData(data.items));
  // };

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
  
    try {
      const response = await fetch(videoList_url);
      const responseData = await response.json();
      setData(responseData.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  });

  return (
    <div className="feed">
      {data.map((items,index) => {
        return (
          <Link
            key={index.id}
            to={`video/${items.snippet.categoryId}/${items.id}`}
            className="card"
          >
            <img src={items.snippet.thumbnails.medium.url} alt="" />
            <h2>{items.snippet.title}</h2>
            <h3>{items.snippet.channelTitle}</h3>
            <p>
              {valueConverter(items.statistics.viewCount)} views &bull;
              {moment(items.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;