import React from 'react';
import './no-items.scss';

export const NoItems = () => (
    <div className="no-items">
        <h4>No items found!</h4>
        <p className="no-items_text">
            Please try again with another values.
        </p>
    </div>
);
