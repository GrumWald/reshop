import React, { Component } from 'react'
import Header from './components/Header';
import './../src/App.css';

export class App extends Component {
    render() {
        return (
            <div className='mainApp'>
                <Header />
            </div>
        )
    }
}

export default App;

