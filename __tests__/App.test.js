import React from 'react';
import { render, screen } from '../src/services/utils';
import { App } from '../src/App';

describe('App', () => {

    test('should render the Main comp for a matching / path', () => {
        render(<App />);
        expect(screen.getByTestId('Main')).toBeInTheDocument();
    });

    test('should render the NotFound comp for any non matching path', () => {
        render(<App />, { route: '/random-route' });
        expect(screen.getByTestId('NotFound')).toBeInTheDocument();
    });

});
