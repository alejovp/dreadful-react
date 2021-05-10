import React from 'react';
import { useDataFetch } from '../../hooks/useDataFetch';
import { CardsPage } from '../../components/CardsPage';


const PAGE_SIZE = 12;

const initialFetchConfig = {
    programType: 'series',
    limit: PAGE_SIZE
};

export const Series = () => {
    const {
        items,
        total,
        loading,
        isError
    } = useDataFetch(initialFetchConfig);

    return (
        <CardsPage items={items}
                   totalItems={total}
                   pageSize={PAGE_SIZE}
                   loading={loading}
                   isError={isError}
                   title="Popular Series"
                   data-testid="Series" />
    );
};
