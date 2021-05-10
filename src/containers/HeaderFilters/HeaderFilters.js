import React, { useCallback, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Search } from 'carbon-components-react';
import { DispatchContext, StateContext } from '../../contexts/AppStore';
import { closeHeaderFilters, setFiltersQuery } from '../../contexts/actions';
import { YearsSelector } from '../YearsSelector';
import './header-filters.scss';


export const HeaderFilters = ({ open }) => {
    const dispatch = useContext(DispatchContext);
    const { searchTerm } = useContext(StateContext);
    const location = useLocation();

    useEffect(() => {
        dispatch(closeHeaderFilters());
    }, [location.pathname, dispatch]);

    const onSearchHandler = useCallback((e) => {
        const { value } = e.target;
        dispatch(setFiltersQuery(value || ''));
    }, [dispatch]);

    return (
        <div className={open ? 'header-filters filters-open' : 'header-filters'}>
            <Search className="header-filters_search"
                    labelText=""
                    autoComplete="off"
                    value={searchTerm}
                    onChange={onSearchHandler} />
            <YearsSelector />
        </div>
    );
};

HeaderFilters.propTypes = {
    open: PropTypes.bool.isRequired
};
