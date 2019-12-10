import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props) {
        super(props); // reference to parent constructor function
        
        // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state
        this.state = {lat: null,
                        errorMessage: ''};

        // Get user's current location
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // Setting State
                this.setState({lat: position.coords.latitude});
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
    }

    componentDidMount() {
        console.log('My component was rendered to the screen');
    }

    componentDidUpdate() {
        console.log('My component was updated')
    }
    
    render() { 
        
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        };

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Lat: {this.state.lat}</div>;
        }

        return <div>Loading!</div>
        
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);