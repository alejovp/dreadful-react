import React from 'react';
import { useDataFetch } from '../../hooks/useDataFetch';
import { CardsPage } from '../../components/CardsPage';


const PAGE_SIZE = 12;

const initialFetchConfig = {
    programType: 'movie',
    limit: PAGE_SIZE
};

export const Movies = () => {
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
                   title="Popular Movies"
                   data-testid="Movies" />
    );
};
