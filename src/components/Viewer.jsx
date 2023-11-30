import React from 'react';
import {useSelector} from "react-redux";

function Viewer(props) {
    const name = useSelector(state => state.name)
    const age = useSelector(state => state.age)

    return (
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
        </div>
    );
}

export default Viewer;