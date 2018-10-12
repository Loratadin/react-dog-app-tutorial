import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Select from './components/select/Select';
import BreedImage from './components/breed-image/BreedImage';

class App extends Component {
    state= {
        breedsList: null,
        error: false
    }
   componentDidMount() {
    this. fetchAllBreeds();
   }
   fetchAllBreeds = async () => {
       try { //try to get data
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if (response.ok) { // ckeck if status code is 200
            const data = await response.json();
            this.setState({
                breedsList: Object.keys(data.message)
            })
        } else {
            this.setState({
                error: true
            })
            alert('Sorry, can not display the data')
        }
        } catch (e) { //code will jump here if there is a network problem
            this.setState ({
                erro: true
            })
            alert('Sorry, can not display the data')
        }
       }
    render( ) {
        console.log(this.state.selectedBreed);
        return (
            <div className="App">
                <Menu/>
                <Select breedsList={this.state.breedsList} isError={this.state.error}/>
                <BreedImage/>
            </div>
        );
    }
}

export default App;