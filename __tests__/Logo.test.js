import React from 'react';
import { render, within } from '../src/services/utils';
import { Logo } from '../src/components/Logo';

import logoSrc from 'assets/logo.png';

describe('Logo', () => {

    it('will render a img elem with the log src', () => {
        const { getByTestId } = render(<Logo />);
        const logoComp = getByTestId('Logo');
        const imgElem = within(logoComp).getByAltText('logo');
        expect(imgElem.src).toContain(logoSrc);
    });

});
