import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Best YouTube Channel to Learn web Development</h3>

            <div className="play-video-info">
                <p>1500 Views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="" />125</span>
                    <span><img src={dislike} alt="" />1</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
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
                <p>Channel that makes learn easy</p>
                <p>Subscribe GreatStack to watch more tutorial on web development</p>
                <hr />
                <h4>140 Comments</h4>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicolsons <span>1 days ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio animi, deleniti voluptatibus officia omnis impedit ex harum cumque saepe.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicolsons <span>1 days ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio animi, deleniti voluptatibus officia omnis impedit ex harum cumque saepe.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicolsons <span>1 days ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio animi, deleniti voluptatibus officia omnis impedit ex harum cumque saepe.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicolsons <span>1 days ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio animi, deleniti voluptatibus officia omnis impedit ex harum cumque saepe.
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicolsons <span>1 days ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio animi, deleniti voluptatibus officia omnis impedit ex harum cumque saepe.
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
    )
}

export default PlayVideo;