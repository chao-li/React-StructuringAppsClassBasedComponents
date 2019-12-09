import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position), // success callback
        (err) => console.log(err)
    );
    return <div> testing</div>
};

ReactDOM.render(
    <App />, document.querySelector('#root')
);