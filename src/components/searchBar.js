import React from 'react';


class SearchBar extends React.Component {
    render() {
        // the input element emits the change event.
        /*
        * This is the event handler inside the onChange value area, as a arrow function.
        */
        return <input onChange={(event) => console.log(event.target.value)}/>;
    }

    /*
    * This is the event handler without the es6 arrow function.
    */
    // // event handler.
    // onInputChange(event) {
    //     // event target value gives me access to the value of the input.
    //     console.log(event.target.value);
    // }
}

// export the functionality contained inside the search bar module.
export default SearchBar;