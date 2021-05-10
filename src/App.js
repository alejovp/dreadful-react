import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Main } from './components/Main';
import { AppStore } from './contexts/AppStore';
import { NotFound } from './components/NotFound';
import { ROUTES } from './router/routes';


export const App = () => {
    return (
        <AppStore>
            <Router>
                <Switch>
                    <Route exact path="/not-found">
                        <NotFound />
                    </Route>
                    <Route path={ROUTES.HOME.path}>
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </AppStore>
    );
};
