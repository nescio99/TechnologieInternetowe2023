import React, {useEffect, useState} from 'react';

const StrobeLight = ({frequency, bgColor}) => {
    const [color, setColor] = useState("white");

    useEffect(() => {
        const intervalID = setInterval(() => {
            setColor(prev => {
                return prev === "white" ? bgColor : "white";
            })
        }, frequency);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <div style={{
            width: "500px",
            height: "100px",
            backgroundColor: color
        }}>

        </div>
    );
};

export default StrobeLight;
