import React from 'react';
import PropTypes from 'prop-types';
import logoSrc from '../../assets/logo.png';
import './logo.scss';

export const Logo = ({ size }) => {
    return (
        <div className="logo"
             data-testid="Logo">
            <img className="logo_img"
                 src={logoSrc}
                 alt="logo"
                 style={{ height: `${size}px` }} />
        </div>
    );
};

Logo.propTypes = {
    size: PropTypes.number
};
