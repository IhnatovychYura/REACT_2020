import React, {useState, useEffect, useReducer, useMemo} from 'react';
import HooksTwoComponent from "../hooks-two/HooksTwoComponent";
import MemoComponent from "../memo/MemoComponent";

function HooksComponent() {

    //////////// ========= useState ======= ////////////////
    const counterData = useState(0);
    useMemo(() => {
        return console.log('що лежить у useState:', counterData);
    }, []);


    let [count, setCount] = useState(0);
    let [todo, setTodo] = useState(null);
    let [counter, setCounter] = useState(0);
    let [isVisible, setIsVisible] = useState(false);

    //////////// ========= useEffect ======= ////////////////
    // Подібно до componentDidMount та componentDidUpdate:
    useEffect(() => {
        // Оновлюємо заголовок документа, використовуючи API браузера
        document.title = `Ви натиснули ${count} разів`;
    });

    // useEffect(() => {
    //     console.log("I was called")
    // }, [])

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

    //////////// ========= useMemo ======= ////////////////
    //  Виконується лише раз, при іншому рендері не повторюється //
    const [arr, setArr] = useState([1,2,3,4,55,65,91,101,2000])

    // стандартна змінна яка буде постійно показуватись при будь-якому рендері
    const totalPrice = arr.reduce((acc, el) => (acc += el), 0);
    console.log(totalPrice);

    // змінна юзМемо яка буде мінятись тільки при тих рендерах коли відбулась зміна
    const totalPrice1 = useMemo(() => {
        return arr.reduce((acc, el) => (acc += el), 0);
    }, [arr]);

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
                    {console.log('Статус із API:', state.completed)}
                </div>
            )
            }
            <hr/>

            <h1>useEffect as compWillUnMount & useMemo</h1>
            <h3>total count from useMemo {totalPrice1}</h3>
            <button onClick={() => setArr([...arr, Math.random()])}>add to Total Price</button>
            <button onClick={() => setIsVisible(!isVisible)}> toggle </button>
            {isVisible && <HooksTwoComponent />}

            <hr/>
            {isVisible && <MemoComponent />}
        </div>
    );
}

export default HooksComponent