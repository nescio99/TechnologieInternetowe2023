import React from 'react';

const ClockDate = ({date}) => {
    return (
        <div>
            <p>{date.toLocaleDateString()}</p>
        </div>
    );
};

export default ClockDate;
