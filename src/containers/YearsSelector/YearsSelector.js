import React, { useCallback, useContext } from 'react';
import { Tooltip } from 'carbon-components-react/es/components/Tooltip/Tooltip';
import { Calendar20 } from '@carbon/icons-react';
import { Close16 } from '@carbon/icons-react';
import { FatButton } from '../../components/FatButton';
import { YearsPanel } from './YearsPanel';
import { DispatchContext, StateContext } from '../../contexts/AppStore';
import { setFiltersDate } from '../../contexts/actions';
import './years-selector.scss';


export const YearsSelector = () => {
    const dispatch = useContext(DispatchContext);
    const { searchDate } = useContext(StateContext);
    const yearsRangeString = searchDate.startYear + ' - ' + searchDate.endYear;
    const {startYear, endYear} = searchDate;

    const onClickHandler = useCallback((year) => {
        if (!startYear) {
            return dispatch(setFiltersDate({
                startYear: year,
                endYear
            }));
        }
        if (startYear && endYear) {
            return dispatch(setFiltersDate({
                startYear: year,
                endYear: ''
            }));
        }
        if (startYear && year >= startYear) {
            return dispatch(setFiltersDate({
                startYear,
                endYear: year
            }));
        }
        if (startYear && year < startYear) {
            return dispatch(setFiltersDate({
                startYear: year,
                endYear: startYear
            }));
        }
    }, [startYear, endYear, dispatch]);

    const onClearHandler = useCallback(e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(setFiltersDate({
            startYear: '',
            endYear: ''
        }));
    }, [dispatch]);

    const renderClearButton = () => {
        if (startYear || endYear) {
            return (
                <div className="bx--search-close years-selector_clear-button"
                     onClick={onClearHandler}>
                    <Close16 />
                </div>
            );
        }
        return null;
    };

    return (
        <Tooltip triggerId="tooltip-trigger"
                 className="years-selector"
                 showIcon={false}
                 menuOffset={{ top: 1 }}
                 triggerText={
                     <FatButton id="tooltip-trigger"
                                icon={
                                    <Calendar20 />
                                }>
                         {yearsRangeString}
                         {renderClearButton()}
                     </FatButton>
                 }>
            <YearsPanel onClickHandler={onClickHandler}
                        startYear={startYear}
                        endYear={endYear}
                        id="tooltip-body" />
        </Tooltip>
    );
};
