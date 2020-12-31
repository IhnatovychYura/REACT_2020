import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER' : {
            return {...state, counter: state.counter + 1}
        }
        case 'DEC_COUNTER' : {
            return {...state, counter: state.counter - 1}
        }
        case 'RESET' : {
            return {...state, counter: 0}
        }
        default: {
            console.error(action, 'no action match');

            return state
        }
    }
}

const store = createStore(reducer);
console.log(store)

////// == Цей запис - це приклад для застосунку в одній компоненті,
// а за допомогою Провайдера ми тепер так можемо писати в будь-якій компоненті == //////

// store.subscribe(() => {
//     console.log(store.getState())
// })
//
// store.dispatch({ type: "INC_COUNTER"})
// store.dispatch({ type: "INC_COUNTER"})
// store.dispatch({ type: "RESET"})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
