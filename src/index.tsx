import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/stor-redax";
import {Provider} from "react-redux";
import MainApp from "./App";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MainApp/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
