import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './img-panel.scss';

export const ImgPanel = ({ buttonText, to, imgSrc, className }) => {
    return (
        <div className={`img-panel ${className}`}
             style={{ backgroundImage: `url(${imgSrc})` }}>
            <Link className="img-panel_button"
                  to={to}>
                {buttonText}
            </Link>
        </div>
    );
};

ImgPanel.propTypes = {
    buttonText: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};
