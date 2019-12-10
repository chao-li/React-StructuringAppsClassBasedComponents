import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props) {
        super(props); // reference to parent constructor function
        
        this.state = {lat: null};


    }
    
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position), // success callback
            (err) => console.log(err)
        );
        
        return <div>Latitude: </div>;
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);