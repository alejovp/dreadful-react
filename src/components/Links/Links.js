import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './links.scss';

export const Links = ({ links }) => {

    const renderLinks = () => links.map((link, i) => {
        if (!link.href || !link.text) {
            return null;
        }

        if (link.imgSrc) {
            return (
                <li key={i}
                    className="links_li">
                    <Link to={link.href}
                          className="links_a">
                        <img alt={link.text} src={link.imgSrc} />
                    </Link>
                </li>
            );
        }

        return (
            <li key={i}
                className="links_li">
                <Link to={link.href}>
                    {link.text}
                </Link>
            </li>
        );
    });

    return (
        <ul className="links">
            {renderLinks()}
        </ul>
    );

};

Links.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired
};
