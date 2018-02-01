// import React(component name) from 'react'(file name).
import React from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

// import from a component created by myself must have this path format.
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyCoTqYxMyr_XKN5dCEuDtZV-WLLNsx7UpQ';


// ajax call to youtube API.
/*
* This call uses the YTsearch and takes two arguments.
* 1) an object with  my api key, and a the term im searching
* 2) a callback function that returns that data retrieved from
*    the search.
*/

// create a new component. This component should produce some HTML.
/*
* A component is similar to a class. Because a component has to be
* initiated in order to be used.
*/
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};


        YTsearch({key: API_KEY, term: 'muffins'}, (videos) => {

            this.setState({ videos });
            // same as this.setState({ videos: videos });
        });
    }

    // JSX transpiles code to vanilla JS.
    /*
    * For multi-line JSX it is common to use parenthesis around the value being returned
    */
    render() {

        return (
            <div>
                <SearchBar />
                {/*this is called passing props. Passing properties
                 from one component to another*/}
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// take the component's generated HTMl and put is the web page (DOM).
/*
* Render is a method the belongs to the reactDOM library. The render
* method takes two parameter. 1) one component 2) one location in which
* the component will be rendered.
*/
ReactDOM.render(<App/>, document.querySelector('.container'));
