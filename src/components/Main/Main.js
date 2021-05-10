import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Header } from '../../containers/Header';
import { Footer } from '../Footer';
import { ROUTES } from '../../router/routes';
import './main.scss';


export const Main = () => {
    return (
        <main className="main"
              data-testid="Main">
            <Header />
            <div className="main_content">
                <Switch>
                    <Route exact
                           path={ROUTES.HOME.path}
                           component={ROUTES.HOME.component} />
                    <Route exact
                           path={ROUTES.MOVIES.path}
                           component={ROUTES.MOVIES.component} />
                    <Route exact
                           path={ROUTES.SERIES.path}
                           component={ROUTES.SERIES.component} />
                    <Route>
                        <Redirect to="/not-found" />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </main>
    );
};
