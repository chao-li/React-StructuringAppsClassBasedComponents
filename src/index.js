import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props) {
        super(props); // reference to parent constructor function
        
        // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state
        this.state = {lat: null};

        // Get user's current location
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // Setting State
                this.setState({lat: position.coords.latitude});
            },
            (err) => console.log(err)
        );
    }
    
    render() { 
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);