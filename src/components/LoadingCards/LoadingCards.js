import React from 'react';
import { Column, SkeletonPlaceholder } from 'carbon-components-react';
import './loading-cards.scss';

export const LoadingCards = () => (
    new Array(12).fill().map((v, i) => (
        <Column key={i}
                sm={4}
                md={2}
                lg={2}
                className="loading-card">
            <div className="loading-card_container">
                <SkeletonPlaceholder />
            </div>
        </Column>
    ))
);
