import React, { Component } from 'react';
import './App.scss';
import Overview from './components/overview';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="header" />
                <Overview />
                <footer className="footer" />
            </div>
        );
    }
}

export default App;
