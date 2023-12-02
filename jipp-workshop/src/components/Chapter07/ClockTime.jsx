import React from 'react';

const ClockTime = ({time}) => {
    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
};

export default ClockTime;
