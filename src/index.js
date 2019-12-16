import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    // state initialization
    state = {lat: null, errorMessage: ''};

    // this is a bit similar to onStart in android dev
    componentDidMount() {
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

    componentDidUpdate() {
        console.log('My component was updated')
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        };

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat = {this.state.lat} />
        }

        return <Spinner message="Please accept location request!"/>;
        
    }
    
    render() { 
        return (
            <div className = "border red">
                {this.renderContent()}
            </div>
        )
        
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);