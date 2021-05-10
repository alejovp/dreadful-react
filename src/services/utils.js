import React from 'react';
import PropTypes from 'prop-types';
import { AppStore } from 'contexts/AppStore';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const AllTheProviders = ({ children }) => {
    return (
        <AppStore theme="light">
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </AppStore>

    );
};

AllTheProviders.propTypes = {
    children: PropTypes.node
};

const customRender = (ui, { route = '/', ...rest } = {}) => {
    window.history.pushState({}, 'Test page', route);
    return render(ui, { wrapper: AllTheProviders, ...rest });
};


// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
