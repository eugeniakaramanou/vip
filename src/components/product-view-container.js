import React, { Component } from 'react';
import ProductView from './product-view';
import 'whatwg-fetch';

const API_URL = 'https://www.mobile.de/hiring-challenge.json';

class ProductViewContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            isOpen: false,
            images: [],
            productName: '',
            requestedImage: ''
        };
        this.openLightboxHandler = this.openLightboxHandler.bind(this);
        this.closeLightboxHandler = this.closeLightboxHandler.bind(this);
    }

    componentDidMount() {
        fetch(`${API_URL}`, {method: "GET"})
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    images: responseData.images,
                    productName: responseData.title});
                window.state = this.state;
            })
            .catch((error) => {
                console.log('Error fetching the images from api', error);
            });
    }

    openLightboxHandler = (imageUrl) => {
        this.setState({
            isOpen: true,
            requestedImage: imageUrl
        });
    };

    closeLightboxHandler = () => {
        this.setState({
            isOpen: false
        });
    };

    render() {
        return <ProductView
            name={this.state.productName}
            images={this.state.images}
            isOpen={this.state.isOpen}
            requestedImage={this.state.requestedImage}
            lightboxCallbacks = {{
                'openLightbox': this.openLightboxHandler,
                'closeLightbox': this.closeLightboxHandler
            }} />
    }
}

export default ProductViewContainer;
