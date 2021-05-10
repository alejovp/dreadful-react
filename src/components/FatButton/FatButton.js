import React from 'react';
import PropTypes from 'prop-types';
import './fat-button.scss';


export const FatButton = ({ className, children, icon = null, ...rest }) => {
    return (
        <button className={className ? `fat-button ${className}` : 'fat-button'}
            {...rest}>
            {icon}
            {children}
        </button>
    );
};

FatButton.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    children: PropTypes.node
};
