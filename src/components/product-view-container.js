import React, { Component } from 'react';
import ProductView from './product-view';

class ProductViewContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            isOpen: false
        };
        this.openLightboxHandler = this.openLightboxHandler.bind(this);
        this.closeLightboxHandler = this.closeLightboxHandler.bind(this);
    }

    openLightboxHandler = () => {
        this.setState({
            isOpen: true
        });
    };

    closeLightboxHandler = () => {
        this.setState({
            isOpen: false
        });
    };

    render() {
        return <ProductView
            isOpen={this.state.isOpen}
            lightboxCallbacks = {{
                'openLightbox': this.openLightboxHandler,
                'closeLightbox': this.closeLightboxHandler
            }} />
    }
}

export default ProductViewContainer;
