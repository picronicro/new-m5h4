import React from 'react';
import {useDispatch} from "react-redux";

function Form(props) {
    const dispatch = useDispatch()

    function saveState(e) {
        e.preventDefault()
        dispatch({type: "SET_NAME", value: e.target.name.value})
        dispatch({type: "SET_AGE", value: e.target.number.value})
    }

    return (
        <div>
            <form onSubmit={saveState}>
                <input name="name" type="text"/>
                <input name="number" type="number"/>
                <button>save</button>
            </form>
        </div>
    );
}

export default Form;