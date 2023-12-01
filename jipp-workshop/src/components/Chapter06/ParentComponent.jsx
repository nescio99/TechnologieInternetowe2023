import React from 'react';
import ChildComponent from "./ChildComponent.jsx";

const ParentComponent = ({children}) => {
    return (
        <div>
            <h1>To jest Parent Component</h1>
            <ChildComponent />
            {children}
            <h4>To jest koniec Grandchild Component</h4>
        </div>
    );
};

export default ParentComponent;
