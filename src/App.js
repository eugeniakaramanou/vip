import React, { Component } from 'react';
import './styles/App.scss';
import ProductViewContainer from './components/product-view-container';


class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="header" />
                <ProductViewContainer />
                <footer className="footer" />
            </div>
        );
    }
}

export default App;
