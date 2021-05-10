import React from 'react';
import { Logo } from '../Logo';
import { Links } from '../Links';
import appleStoreImgSrc from '../../assets/app-store.png';
import googleStoreImgSrc from '../../assets/google-play.png';
import './footer.scss';

const footerLinks = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Term of use',
        href: '#'
    },
    {
        text: 'Legal Notices',
        href: '#'
    },
    {
        text: 'Help',
        href: '#'
    },
    {
        text: 'Manage Account',
        href: '#'
    }
];

const footerStoreLinks = [
    {
        text: 'Apple Store',
        href: '#',
        imgSrc: appleStoreImgSrc
    },
    {
        text: 'Google Store',
        href: '#',
        imgSrc: googleStoreImgSrc
    },
];

export const Footer = () => {
    return (
        <div className="footer"
             data-testid="Footer">
            <Logo size={23} />
            <Links links={footerLinks} />
            <Links links={footerStoreLinks} />
            <p className="footer_copyright">
                Copyright 2020 Dreadfull Tomato Streaming. All Rights Reserved
            </p>
        </div>
    );
};
