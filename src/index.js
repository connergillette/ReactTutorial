import React from 'react';
import ReactDOM from 'react-dom';

// Create new component - should produce some HTML
const App = () => { // CLASS of component - NOT an instance
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
