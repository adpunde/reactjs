import React from 'react';

// App is a component
var App = React.createClass({
    getInitialState: function () {
        return {
            clicks: 0
        };
    },
    increment: function () {
        this.setState({
            clicks: this.state.clicks + 1
        });
    },
    performMagic: function (event) {
        console.log('Event', event);
        alert('Magic !');
    },
    render: function () {
        return (
            <div>
                <h1>Welcome to React.js !</h1>
                Hello World !
                <h3>Addition of 4 and 5 : {4 + 5}</h3>
                <span className="spantext">Apply CSS using className</span>
                <h4>Accessing property: {this.props.message}</h4>
                <button onClick={this.performMagic}>Click Me !</button>
                <div>Counter: {this.state.clicks}
                    <button onClick={this.increment}>Increment !</button>
                </div>
            </div>
        );
    }
});

/*
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to React.js !</h1>
                Hello World !
            </div>
        );
    }
}
*/

export default App;
