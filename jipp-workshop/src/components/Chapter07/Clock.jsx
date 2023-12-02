import React, {useEffect, useState} from 'react';
import ClockTime from "./ClockTime.jsx";
import ClockDate from "./ClockDate.jsx";

const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <div>
            <ClockTime time={currentDate} />
            <ClockDate date={currentDate} />
        </div>
    );
};

export default Clock;
