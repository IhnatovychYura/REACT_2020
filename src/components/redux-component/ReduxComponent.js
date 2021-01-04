import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {incCounter, decCounter, resetCounter, fetchTodos} from "../../redux/action-creators"


const ReduxComponent = () => {

    // const test = useSelector(({state}) => {
    //     console.log(state);
    //     return state
    // })

    const counter = useSelector(({counter: {counter}}) => counter) // 1 варіант глибше дістати об'єкт
    const todos = useSelector(({todos}) => todos.todos) // 2 варіант глибше дістати об'єкт

    const storeData = useSelector(({counter: {counter}, todos: {todos}}) => ({counter, todos})) // 3 варіант - Найкращий, витягнути із Стору все що є

    const dispatch = useDispatch()

    useEffect(() => {
        fetchTodos(dispatch);
    }, [dispatch]);

    const handleInc = () => dispatch(incCounter());
    const handleDec = () => dispatch(decCounter());
    const handleRes = () => dispatch(resetCounter());

    return (
        <div>
            <h1>Hello this is REDUX</h1>
            <h2>Counter from index.js {storeData.counter}</h2>
            <button onClick={handleInc}>inc</button>
            <button onClick={handleDec}>dec</button>
            <button onClick={handleRes}>reset</button>

            <h2>Todos from JSON.PLACEHOLDER</h2>
            {todos.map(todo => (
                <h3>{todo.id} - {todo.title}</h3>
            ))}

        </div>
    )
}

export default ReduxComponent