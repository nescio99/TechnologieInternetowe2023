import React from 'react';

const RGBBoxes = () => {
    const redDiv = <div style={{width: "100px", height: "100px", background: "red" }} />;
    const greenDiv = <div style={{width: "100px", height: "100px", background: "green" }}/>;
    const blueDiv = <div style={{width: "100px", height: "100px", background: "blue" }}/>;

    return (
        <div>
            {redDiv}
            {greenDiv}
            {blueDiv}
        </div>
    );
};

export default RGBBoxes;
