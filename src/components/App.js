import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            term: '',
            itemList: [
                {name: 'cream', done: false},
                {name: 'milk', done: false}
            ]
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" className='term' />
                    <button>Add</button>
                </form>
                Anderson
            </div>
        )
    }
}