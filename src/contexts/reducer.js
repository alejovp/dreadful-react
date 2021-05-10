import { SET_FILTERS_DATE } from './constants';
import { CLOSE_HEADER_FILTERS } from './constants';
import { SET_FILTERS_TERM } from './constants';
import { TOGGLE_SHOW_FILTERS } from './constants';


export const appReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_FILTERS:
            return {
                ...state,
                showFilters: !state.showFilters,
                searchTerm: '',
                searchDate: {
                    ...state.searchDate,
                    startYear: '',
                    endYear: ''
                }
            };
        case CLOSE_HEADER_FILTERS:
            return {
                ...state,
                showFilters: false,
                searchTerm: '',
                searchDate: {
                    ...state.searchDate,
                    startYear: '',
                    endYear: ''
                }
            };
        case SET_FILTERS_TERM:
            return {
                ...state,
                searchTerm: action.payload.toLowerCase()
            };
        case SET_FILTERS_DATE:
            return {
                ...state,
                searchDate: {
                    ...state.searchDate,
                    startYear: action.payload.startYear,
                    endYear: action.payload.endYear
                }
            };
        default:
            return {
                ...state,
                searchDate: {
                    ...state.searchDate
                }
            };
    }
};
