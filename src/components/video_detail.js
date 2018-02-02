import React from 'react';

const VideoDetail = ({video}) => {

    /*
    * OBS: whenever using youtube API;
    * If i wish to embed a video or even
    * navigate to a video, All I need is
    * the ID, because the ID is the only
    * thing that changes in youtube videos url.
    */
    // retrieve video id in order to craft URL.
    const videoId = video.id.videoId;
    // using string templating ES6.(USE BACK-TICK)
    const url = `https://www.youtube.com/embed${videoId}`;

    return (
        <div className={"video-detail col-md-8"}>
            <div className={"embed-responsive embed-responsive-16by9"}>
                <iframe src={url}>
                </iframe>
                <div className={"detail"}>
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        </div>
    );

};

export default VideoDetail;