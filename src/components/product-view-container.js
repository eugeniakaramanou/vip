import React, { Component } from 'react';
import ProductView from './product-view';

class ProductViewContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            isOpen: true
        }
    }

    openLightbox = () => {
        this.setState({
            isOpen: true
        });
    };

    closeLightbox = () => {
        this.setState({
            isOpen: false
        });
    };

    render() {
        return <ProductView
            show={this.state.isOpen}
            openLightboxHandler={this.openLightbox.bind(this)}
            closeLightboxHandler={this.closeLightbox.bind(this)} />
    }
}

export default ProductViewContainer;
