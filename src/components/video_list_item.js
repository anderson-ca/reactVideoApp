import React from 'react';

//functional component
/*
* This functional component takes one argument
* and returns that argument in between li's (JSX).
*
* instead of assigning the value inside props to
* a variable and later using that variable, I'm
* using ES6 {video}.
*/
const VideoListItem = ({video}) => {

    console.log(video);

    // in order to access properties inside props I need dot notation.
    // let video = props.video; -> old way.
    return (
        <li className={"list-group-item"}>
            <div className={"video-list-media"}>
                <div className={"media-left"}>
                    <img src="" alt=""/>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;