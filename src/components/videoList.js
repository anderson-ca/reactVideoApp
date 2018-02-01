import React from 'react';

// when using functional components, the props object passed by the class component will arrive as an argument.
const VideoList = (props) => {

    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
};

export default VideoList;