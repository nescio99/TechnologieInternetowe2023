import React from 'react';
import GrandchildComponent from "./GrandchildComponent.jsx";

const ChildComponent  = () => {
    return (
        <div>
            <h2>To jest Child Component</h2>
            <GrandchildComponent />
        </div>
    );
};

export default ChildComponent;
