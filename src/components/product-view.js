import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from "./lightbox";

const ProductView = ({ name, images, isOpen, lightboxCallbacks}) => (
    <div className="product">
        <h1 className="product__name">{name}</h1>
        <ul className="product__images">
            {
                images.map( image =>
                    <li className="product__thumbnail">
                        <img alt="" src={image.url} onClick={lightboxCallbacks.openLightbox} />
                    </li>
                )
            }
        </ul>
        <Lightbox isOpen={isOpen} onClose={lightboxCallbacks.closeLightbox}>
            <img alt="" src="https://i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$_27.png" />
        </Lightbox>
    </div>
);

ProductView.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    lightboxCallbacks: PropTypes.object
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
