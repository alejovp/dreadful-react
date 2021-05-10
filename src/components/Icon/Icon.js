import React from 'react';
import PropTypes from 'prop-types';
import './icon.scss';

export const Icon = ({ className, alt, right, left, ...rest }) => {
    const leftClass = left ? 'icon_left' : '';
    const rightClass = right ? 'icon_right' : '';
    return <img className={`icon ${leftClass} ${rightClass} ${className || ''}`}
                alt={alt}
                {...rest} />;
};

Icon.propTypes = {
    className: PropTypes.string,
    alt: PropTypes.string,
    right: PropTypes.bool,
    left: PropTypes.bool
};
