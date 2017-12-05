import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDIJtl0AX2P81zEpAJcKdO6fKIYqiDEJXY';

// Create new component - should produce some HTML
const App = () => { // CLASS of component - NOT an instance
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
