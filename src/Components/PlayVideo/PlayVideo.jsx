import { useEffect, useState } from "react";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    try {
      const response = await fetch(videoDetails_url);
      const responseData = await response.json();
      setApiData(responseData.items[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  },[]);

  // Check if apiData is still loading
  if (!apiData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>

      <div className="play-video-info">
        <p>
          {apiData ? valueConverter(apiData.statistics.viewCount) : "15K"} Views
          &bull; {moment(apiData.snippet.publishedAt).fromNow()}{" "}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />1
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>999k Subscribed</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe GreatStack to watch more tutorials on web development</p>
        <hr />
        <h4>140 Comments</h4>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicolsons <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio
              animi, deleniti voluptatibus officia omnis impedit ex harum cumque
              saepe.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe GreatStack to watch more tutorials on web development</p>
        <hr />
        <h4>140 Comments</h4>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicolsons <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio
              animi, deleniti voluptatibus officia omnis impedit ex harum cumque
              saepe.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe GreatStack to watch more tutorials on web development</p>
        <hr />
        <h4>140 Comments</h4>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicolsons <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio
              animi, deleniti voluptatibus officia omnis impedit ex harum cumque
              saepe.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe GreatStack to watch more tutorials on web development</p>
        <hr />
        <h4>140 Comments</h4>
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicolsons <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio
              animi, deleniti voluptatibus officia omnis impedit ex harum cumque
              saepe.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
