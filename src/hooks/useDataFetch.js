import { useContext, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { StateContext } from '../contexts/AppStore';
import { useUrlSearchParams } from './useUrlSearchParams';


const getFilteredItems = (
    items,
    programType,
    searchTerm,
    startYear,
    endYear
) => {
    return items.filter(item => {
        const isSameProgram = item.programType === programType;
        const itemTitle = item.title.toLowerCase();
        if (isSameProgram) {
            if (searchTerm && !itemTitle.includes(searchTerm)) {
                return false;
            } else {
                if (startYear && endYear) {
                    return item.releaseYear >= startYear && item.releaseYear <= endYear;
                } else if (startYear || endYear) {
                    return item.releaseYear === startYear || item.releaseYear === endYear;
                } else if (!startYear && !endYear) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        return false;
    });
};

const getPageItems = (items, page, limit) => {
    return items.slice((page - 1) * limit, page * limit);
};

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                loading: true,
                isError: false
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                isError: false,
                items: action.payload.items,
                total: action.payload.total,
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                isError: true,
            };
        default:
            return { ...state };
    }
};

export const useDataFetch = (initialConfig) => {
    const { searchTerm, searchDate } = useContext(StateContext);
    const { startYear, endYear } = searchDate;
    const history = useHistory();
    const [state, dispatch] = useReducer(dataFetchReducer, {
        items: [],
        total: 0,
        loading: false,
        isError: false,
        limit: 10,
        programType: '',
        ...initialConfig
    });

    const urlParams = useUrlSearchParams();
    const page = urlParams.get('page') || 1;

    useEffect(() => {
        let isMounted = true;

        const setCurrentItems = items => {

            const filteredItems = getFilteredItems(
                items,
                state.programType,
                searchTerm,
                startYear,
                endYear
            );

            if (state.limit * (page - 1) > filteredItems.length) {
                history.push('?page=1');
            }

            return {
                total: filteredItems.length,
                items: getPageItems(filteredItems, page, state.limit)
            };
        };

        const fetchData = () => {
            dispatch({ type: 'FETCH_START' });

            fetch('api-mock/data.json', {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(res => res.json())
                .then(({ entries }) => {
                    if (isMounted) {
                        const result = setCurrentItems(entries);
                        if (result.total === 0) {
                            dispatch({ type: 'FETCH_ERROR' });
                        } else {
                            dispatch({
                                type: 'FETCH_SUCCESS',
                                payload: result
                            });
                        }
                    }
                })
                .catch(error => {
                    console.error(error);
                    if (isMounted) {
                        dispatch({ type: 'FETCH_ERROR' });
                    }
                });
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    },
    [
        page,
        state.limit,
        state.programType,
        searchTerm,
        history,
        startYear,
        endYear
    ]);

    return state;
};
