import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './years-panel-item.scss';


export const YearsPanelItem = ({ year, onClickHandler, isActive }) => {
    const onClick = useCallback(
        () => onClickHandler(year),
        [year, onClickHandler]
    );

    return (
        <li className={isActive ? 'years-panel_body_item year-active' : 'years-panel_body_item'}
            data-value={year}
            onClick={onClick}>
            {year}
        </li>
    );
};

YearsPanelItem.propTypes = {
    year: PropTypes.number.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
};
