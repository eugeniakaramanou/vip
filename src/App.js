import React, { Component } from 'react';
import './styles/App.scss';
import ProductView from './components/product-view';


class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="header" />
                <ProductView />
                <footer className="footer" />
            </div>
        );
    }
}

export default App;
