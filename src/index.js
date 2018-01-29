import React from 'react';

import ReactDOM from 'react-dom';

// CREATE A NEW COMPONENT. THIS COMPONENT SHOULD PRODUCE SOME HTML.
const App = () => {
    return <div>Hello!</div>
};


// TAKE THE COMPONENT'S GENERATED HTML AND PUT IN THE WEB PAGE (DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
