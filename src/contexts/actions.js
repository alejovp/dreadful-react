import { SET_FILTERS_DATE } from './constants';
import { CLOSE_HEADER_FILTERS } from './constants';
import { SET_FILTERS_TERM } from './constants';
import { TOGGLE_SHOW_FILTERS } from './constants';


export const toggleShowFilters = () => {
    return {
        type: TOGGLE_SHOW_FILTERS
    };
};

export const setFiltersQuery = value => {
    return {
        type: SET_FILTERS_TERM,
        payload: value
    };
};

export const setFiltersDate = value => {
    return {
        type: SET_FILTERS_DATE,
        payload: value
    };
};

export const closeHeaderFilters = () => {
    return {
        type: CLOSE_HEADER_FILTERS
    };
};

