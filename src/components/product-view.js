import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from "./lightbox";

class ProductView extends Component {
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
    }

    closeLightboxHandler = () => {
        this.setState({
            isOpen: false
        });
    }

    render() {
        return (
            <div className="product">
                <h1 className="product__name">{this.props.name}</h1>
                <ul className="product__images">
                    {
                        this.props.images.map( image =>
                            <li className="product__thumbnail">
                                <img alt="" src={image.url} onClick={this.openLightboxHandler} />
                            </li>
                        )
                    }
                </ul>
                <Lightbox isOpen={this.state.isOpen} onClose={this.closeLightboxHandler}>
                    <img alt="" src="https://i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$_27.png" />
                </Lightbox>
            </div>
        )
    }
}

ProductView.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string.isRequired
};

ProductView.defaultProps = {
    images: [
        {
            url: 'https://i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$_2.png'
        },
        {
            url: 'https://i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$_2.png'
        },
        {
            url: 'https://i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$_2.png'
        }
    ],
    name: 'Audi A4 Avant'
};

export default ProductView;
