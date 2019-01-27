import React from 'react';
import '../styles/lightbox.scss';
import PropTypes from 'prop-types';

const Lightbox = ({ name, isOpen, onClose, children}) => {
    return (
        <div className={isOpen ? "overlay" : "overlay overlay--hidden"} onClick={onClose}>
            <div className={isOpen ? "lightbox" : "lightbox lightbox--hidden"}>
                <div className="lightbox__header">
                    <span className="lightbox__title">{name}</span>
                    <span className="lightbox__close" onClick={onClose}>×</span>
                </div>
                <div className="lightbox__content">
                    {
                        children ?
                            children :
                            <div className="image-unavailable"> Photo not available </div>
                    }
                </div>
            </div>
        </div>
    )
};

Lightbox.propTypes = {
    name: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    children: PropTypes.any
};

Lightbox.defaultProps = {
    name: 'Car photo',
    isOpen: false
};

export default Lightbox;
