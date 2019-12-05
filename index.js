console.log('hi');

const element = React.createElement('div',null,'React Element!');//creates react Element Object, .creatElement is included in React CDN

ReactDOM.render(element, document.getElementById('root')); //document.body is bad practice (per the error message wisdome lol) better to access from .html file instead directly through parent elements. 
