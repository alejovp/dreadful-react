import React from 'react';
import { render, screen } from '../src/services/utils';
import { Main } from '../src/components/Main';
import { useDataFetch } from '../src/hooks/useDataFetch';


beforeEach(() => {
    useDataFetch.mockImplementation(() => ({
        items: [],
        total: 0,
        loading: false,
        isError: false,
        limit: 10,
        programType: '',
    }));
});

describe('Main', () => {

    it('should render the Main comp', () => {
        render(<Main />);
        expect(screen.getByTestId('Main')).toBeInTheDocument();
    });

    it('will render a Header comp', () => {
        render(<Main />);
        expect(screen.getByTestId('Header')).toBeInTheDocument();
    });

    it('will render a Footer comp', () => {
        render(<Main />);
        expect(screen.getByTestId('Footer')).toBeInTheDocument();
    });

    it('will render a Home comp at the base route', () => {
        render(<Main />);
        expect(screen.getByTestId('Home')).toBeInTheDocument();
    });

    it('will render a Movies comp at the movies route', () => {
        render(<Main />, { route: '/movies' });
        expect(screen.getByTestId('Movies')).toBeInTheDocument();
    });

    it('will render a Series comp at the series route', () => {
        render(<Main />, { route: '/series' });
        expect(screen.getByTestId('Series')).toBeInTheDocument();
    });

});
