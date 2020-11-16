import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import PageApp from './PageApp';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(<Main />,document.getElementById('root'));
ReactDOM.render(<PageApp />, document.getElementById('pageList'));
/* ReactDOM.render(
    <CommentBox url="http://localhost:3001/pages" pollInterval={2000} />,
    document.getElementById('content')
); */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
