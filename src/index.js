import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDIJtl0AX2P81zEpAJcKdO6fKIYqiDEJXY';

// Create new component - should produce some HTML
class App extends Component { // CLASS of component - NOT an instance
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
