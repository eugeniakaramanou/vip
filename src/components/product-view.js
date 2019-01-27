import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from "./lightbox";

export function getImageUrl(uri, size = 'small') {
    if (size === 'large') {
        return 'https://'+ uri + '_27.png';
    }
    return 'https://'+ uri + '_2.png';
};

const ProductView = ({ name, images, isOpen, requestedImage, lightboxCallbacks}) => (
    <div className="product">
        <h1 className="product__name">{name}</h1>
        <ul className="product__images">
            {
                images.map( (image, index) =>
                    <li className="product__thumbnail" key={index}>
                        <img alt={name}
                             className="product__thumbnail__img"
                             src={getImageUrl(image.uri)}
                             onClick={ () => lightboxCallbacks.openLightbox(getImageUrl(image.uri, 'large'))}
                        />
                    </li>
                )
            }
        </ul>
        <Lightbox name={name} isOpen={isOpen} onClose={lightboxCallbacks.closeLightbox}>
            {
                requestedImage ?
                    <img alt={name} src={requestedImage} /> : ''
            }
        </Lightbox>
    </div>
);

ProductView.propTypes = {
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object),
    isOpen: PropTypes.bool,
    requestedImage: PropTypes.string,
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
