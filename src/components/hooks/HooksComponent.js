import React, {useState, useEffect, useReducer} from 'react';

function HooksComponent() {

    //////////// ========= useState ======= ////////////////
    const counterData = useState(0);
    console.log(counterData);

    let [count, setCount] = useState(0);
    let [todo, setTodo] = useState(null);
    let [counter, setCounter] = useState(0);


    //////////// ========= useEffect ======= ////////////////
    // Подібно до componentDidMount та componentDidUpdate:
    useEffect(() => {
        // Оновлюємо заголовок документа, використовуючи API браузера
        document.title = `Ви натиснули ${count} разів`;
    });

    useEffect(() => {
        console.log("I was called")
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
            .then(response => response.json())
            .then(json => setTodo(json))
    }, [count])


    //////////// ========= useReducer ======= ////////////////
    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_TODO": {
                return action.payload
            }
            case "CHANGE_TODO_STATUS": {
                return {
                    ...state,
                    completed: !state.completed
                }
            }
            case "CHANGE_TODO_TITLE": {
                return {
                    ...state,
                    title: action.payload
                }
            }
            default: {
                console.error(`didn't found case for action`, action);
                return state
            }
        }
    }

    let initialState = {
        userId: null,
        id: null,
        title: "",
        completed: false,
    }

    let [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(response => response.json())
            .then((json) => {
                dispatch({type: "SET_TODO", payload: json})
            })
    }, [counter])

    const onClickInc = () => {
        setCounter(counter + 1)
    }

    const onStatusChange = () => {
        dispatch({type: "CHANGE_TODO_STATUS"})
    }

    const onTitleChange = () => {
        dispatch({type: "CHANGE_TODO_TITLE", payload: Math.random()})
    }

    //////////////// ======  ====== /////////////////////
    const onCLickIncrement = () => {
        setCount(count + 1)
        // == another syntax == //
        // setCount((prevState) => prevState + 1)
    }

    const onCLickDecrement = () => {
        setCount(count - 1)
    }

    const onCLickReset = () => {
        setCount(count = 0)
    }

    return (
        <div>
            <p>Ви натиснули {count} разів</p>
            <button onClick={onCLickIncrement}> +</button>
            <button onClick={onCLickDecrement}> -</button>
            <button onClick={onCLickReset}> Reset</button>
            {todo && (
                <div>
                    <h1>From useEffect</h1>
                    <h2>{todo.id}</h2>
                    <h2>{todo.title}</h2>
                </div>
            )
            }
            <hr/>

            <button onClick={onClickInc}>+</button>
            <button onClick={onStatusChange}> Change Status</button>
            <button onClick={onTitleChange}> Change Title</button>
            {!!state && (
                <div>
                    <h1>From useReduce</h1>
                    <h2>{state.id}</h2>
                    <h2>{state.title}</h2>
                    {console.log(state.completed)}
                </div>
            )
            }
        </div>
    );
}

export default HooksComponent