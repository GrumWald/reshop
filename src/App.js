import React, { Component } from 'react'
import Axios from 'axios';

import Header from './components/Header';
import Photos from './components/Photos';
import './../src/App.css';

export class App extends Component {
    state = {
        photos: []
    }

    componentDidMount() {
        Axios.get( 'https://jsonplaceholder.typicode.com/photos?_limit=100' )
            .then( res => this.setState( {
                photos: res.data
            } ) );
    }

    render() {
        return (
            <div className='mainApp'>
                <Header />
                <Photos photos={this.state.photos} className='photosList'/>
            </div>
        )
    }
}

export default App;

