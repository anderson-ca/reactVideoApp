import React from 'react';


class SearchBar extends React.Component {

    constructor(props) {

        // calling parent method with super.
        super(props);

        // initialize state.
        /*
        * State in initialized by creating a new object,
        * and assigning it to this.state. The object passed
        * to state has properties that I want to be recorded
        * in state.
        */
        this.state = {term: ''};
    }


    render() {
        // the input element emits the change event.
        /*
        * This is the event handler inside the onChange value area, as an arrow function.
        * Also, I am using a setter in order to change the state by assigning the output
        * from the event handler method as the value value for term.
        *
        * Order of operation
        *
        * 1) the value of the input is set as the initial value for the state.
        * 2) the user input triggers(onChange) the event handler.
        * 3) the event handler method assigns the user input as the state value.
        * 4) the state is assigned as the value for the input.
        */
        return (
            <div className={"search-bar"}>
                <input
                    value={this.state.term}
                    // search-bar functionality explained: 3
                    /* create an onChange attribute that has a callback function
                    that takes an (event) argument. and passes the target.value
                    of that variable as an argument to the onInputChange function.*/
                    onChange={(event) => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    // search-bar functionality explained: 4
    /*
    * Create an onInputChange method that
    * takes one argument, and set's the
    * value to the term attribute inside
    * the state object to that value (term).
    * OBS: this method takes its argument
    * from the onChange event being returned
    * by the SearchBar component.
    *
    * Also, the since the SearchBar component
    * has access to the onSearchTermchange,
    * through props. I will call that method
    * and assign term to it.
    */
    onInputChange(term) {

        this.setState({term});

        this.props.onSearchTermChange(term);
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

















