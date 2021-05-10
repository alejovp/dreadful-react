import React from 'react';
import { render, screen } from '../src/services/utils';
import { Header } from '../src/containers/Header';

describe('Header', () => {

    beforeEach(() => {
        render(<Header />);
    });

    it('will render a Header comp', () => {
        expect(screen.getByTestId('Header')).toBeInTheDocument();
    });

    it('will render a carbon HeaderName comp with a Logo inside', () => {
        const headerNameComp = screen.getByTestId('HeaderName');
        const logoComp = screen.getByTestId('Logo');
        expect(headerNameComp).toContainElement(logoComp);
    });

});
