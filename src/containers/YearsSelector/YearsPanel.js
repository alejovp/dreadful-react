import React from 'react';
import PropTypes from 'prop-types';
import { YearsPanelItem } from './YearsPanelItem';
import './years-panel.scss';


const years = (() => {
    const limitYear = 1920;
    const currentYear = new Date().getFullYear();
    let list = [];
    for (let i = currentYear; i >= limitYear; i--) {
        list.push(i);
    }
    return list;
})();

export const YearsPanel = ({ startYear, endYear, onClickHandler }) => {

    const checkIsActive = year => {
        if (!year) {
            return false;
        }
        if (year === startYear ||
                year === endYear ||
                    (startYear && endYear &&
                        (startYear < year && year < endYear))) {
            return true;
        }
        return false;
    };

    const renderPanelItems = () => (
        years.map((year, i) => (
            <YearsPanelItem year={year}
                            key={`${i}-${year}`}
                            onClickHandler={onClickHandler}
                            isActive={checkIsActive(year)} />
        ))
    );

    return (
        <div className="years-panel">
            <div className="years-panel_header">
                {`Select ${startYear ? 'end' : 'start'} year`}
            </div>
            <ul className="years-panel_body">
                {renderPanelItems()}
            </ul>
        </div>
    );
};

YearsPanel.propTypes = {
    startYear: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    endYear: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onClickHandler: PropTypes.func.isRequired
};
