import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { PaginationNav } from 'carbon-components-react';
import { useUrlSearchParams } from '../../hooks/useUrlSearchParams';
import { Cards } from '../Cards';


export const CardsPage = ({
    title,
    items,
    totalItems,
    pageSize = 10,
    loading,
    isError,
    ...rest
}) => {

    const history = useHistory();
    const urlParams = useUrlSearchParams();
    const totalPages = Math.ceil(totalItems / pageSize || 1);
    const onSetPage = useCallback(
        page => history.push(`?page=${page + 1}`),
        [history]);

    const urlPage = urlParams.get('page');
    let currentPage = 0;
    if (urlPage) {
        currentPage = +urlPage - 1;
    }

    const renderPaginator = () => {
        if (isError) {
            return null;
        }
        return (
            <PaginationNav totalItems={totalPages}
                           page={currentPage}
                           onChange={onSetPage} />
        );
    };

    return (
        <div {...rest}>
            <Cards items={items}
                   title={title}
                   loading={loading}
                   isError={isError} />
            {renderPaginator()}
        </div>
    );
};

CardsPage.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    totalItems: PropTypes.number,
    pageSize: PropTypes.number,
    loading: PropTypes.bool,
    isError: PropTypes.bool
};
