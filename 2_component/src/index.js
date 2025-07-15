import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

//import App from './App';
//import App from './b_ex_comment/CommentList';
//import App from './c_state/App2_event';
//import App from './c_state/App3_state_class';
//import App from './c_state/App3_state_func';
//import App from './c_state/App4_연습1';
//import App from './c_state/App1_components';
//import App from './c_state/App0_state_class';
//import App from './c_state/App5_연습';
//import App from './c_state/App6_state_배열';
//import App from './d_lifecycle/App1_class_lifecycle';
//import App from './d_lifecycle/App2_func_lifecycle';
//import App from './c_state/App7_연습_class';
//import App from './e_hook.js/App1_useEffect';
//import App from './e_hook.js/App1_useEffect연습';

//import App from './e_hook.js/App2_useMemo';
//import App from './e_hook.js/App3_useCallbck';
//import App from './e_hook.js/App4.useRef';
//import App from './e_hook.js/App4.useRef2';
//import App from './e_hook.js/App4.useRef3';
//import App from './e_hook.js/App5.todo';
//import App from './e_hook.js/App6_useHook';
import App from './z_exercise/App';
//import App from './z_exercise/App_practice1_js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
