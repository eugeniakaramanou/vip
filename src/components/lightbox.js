import React from 'react';
import '../styles/lightbox.scss';
import PropTypes from 'prop-types';

const Lightbox = ({ isOpen, onClose, children}) => {
    return (
        <div className={isOpen ? "overlay" : "overlay overlay--hidden"} onClick={onClose}>
            <div className={isOpen ? "lightbox" : "lightbox lightbox--hidden"}>
                <div className="lightbox__header">
                    <span className="lightbox__title">header</span>
                    <span className="lightbox__close" onClick={onClose}>×</span>
                </div>
                <div className="lightbox__content">
                    {children}
                </div>
            </div>
        </div>
    )
};

Lightbox.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    children: PropTypes.any
};

Lightbox.defaultProps = {
    isOpen: false
};

export default Lightbox;
