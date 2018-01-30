// import React(component name) from 'react'(file name).
import React from 'react';

import ReactDOM from 'react-dom';

// import from a component created by myself must have this path format.
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyCoTqYxMyr_XKN5dCEuDtZV-WLLNsx7UpQ';

// create a new component. This component should produce some HTML.
/*
* A component is similar to a class. Because a component has to be
* initiated in order to be used.
*/
const App = () => {

    // JSX transpiles code to vanilla JS.
    /*
    * For multi-line JSX it is common to use parenthesis around the value being returned
    */
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// take the component's generated HTMl and put is the web page (DOM).
/*
* Render is a method the belongs to the reactDOM library. The render
* method takes two parameter. 1) one component 2) one location in which
* the component will be rendered.
*/
ReactDOM.render(<App/>, document.querySelector('.container'));
