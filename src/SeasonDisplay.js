import React from 'react';

const SeasonDisplay = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position), // success callback
        (err) => console.log(err)
    );

    return <div> Season Display</div>
};

// exports this file and allow access by other components
export default SeasonDisplay;