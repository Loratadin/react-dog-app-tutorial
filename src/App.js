import React, { Component } from 'react';
import './App.css';
import BreedImage from './components/breed-image/BreedImage';
import Select from './components/select/Select';
import Menu from './components/menu/Menu';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu/>
                <Select/>
                <BreedImage/>
            </div>
        )
    }
}

export default App;