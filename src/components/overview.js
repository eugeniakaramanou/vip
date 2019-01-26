import React from 'react';
import PropTypes from 'prop-types';

const Overview = ({ images, name }) => (
    <div className="product">
        <h1 className="product__name">{name}</h1>
        <ul className="product__images">
        {
            images.map( image =>
                <li className="product__thumbnail">
                    <img alt="" src={image.url} />
                </li>
            )
        }
        </ul>
    </div>
);

Overview.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string.isRequired
};

Overview.defaultProps = {
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

export default Overview;
