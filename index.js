import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement('div',null,'React Element!');//creates react Element Object, .creatElement is included in React CDN
const element = <div>React Element with JSX </div>

ReactDOM.render(element, document.getElementById('root')); //document.body is bad practice (per the error message wisdome lol) better to access from .html file instead directly through parent elements. 
