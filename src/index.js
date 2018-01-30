// IMPORT React(COMPONENT NAME) FROM 'react'(FILE NAME).
import React from 'react';

import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyCoTqYxMyr_XKN5dCEuDtZV-WLLNsx7UpQ';

// CREATE A NEW COMPONENT. THIS COMPONENT SHOULD PRODUCE SOME HTML.
/*
* A component is similar to a class. Because a component has to be
* initiated in order to be used.
*/
const App = () => {

    // JSX TRANSPILES CODE INTO VANILLA JS.
    /*
    * For multi-line JSX it is common to use parenthesis around the value being returned
    */
    return (
        <div>
            <SearchBar />
        </div>
    );
};


// TAKE THE COMPONENT'S GENERATED HTML AND PUT IN THE WEB PAGE (DOM).
/*
* Render is a method the belongs to the reactDOM library. The render
* method takes two parameter. 1) one component 2) one location in which
* the component will be rendered.
*/
ReactDOM.render(<App/>, document.querySelector('.container'));
