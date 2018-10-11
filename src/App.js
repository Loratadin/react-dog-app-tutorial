import React, { Component } from 'react';
import './App.css';
import BreedImage from './components/breed-image/BreedImage';
import Select from './components/select/Select';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>Menu</div>
                <Select/>
                <BreedImage/>
            </div>
        )
    }
}

export default App;