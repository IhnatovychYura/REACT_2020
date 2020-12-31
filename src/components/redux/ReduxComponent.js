import React, {} from 'react';
import {useSelector, useDispatch} from "react-redux";

const ReduxComponent = () => {

    const counter = useSelector(({counter}) => counter)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Hello this is REDUX</h1>
            Counter from index.js {counter}
            <button onClick={() => dispatch({type: 'INC_COUNTER'})}>inc</button>
            <button onClick={() => dispatch({type: 'DEC_COUNTER'})}>dec</button>
            <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
        </div>
    )
}

export default ReduxComponent