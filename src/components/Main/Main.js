import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Header } from '../../containers/Header';
import { Footer } from '../Footer';
import { MAIN_ROUTES } from '../../router/routes';
import './main.scss';


export const Main = () => {

    const renderMainRoutes = () => MAIN_ROUTES.map((route, i) => (
        <Route key={i}
               exact
               path={route.path}
               component={route.component} />
    ));

    return (
        <main className="main"
              data-testid="Main">
            <Header />
            <div className="main_content">
                <Switch>
                    {renderMainRoutes()}
                    <Route>
                        <Redirect to="/not-found" />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </main>
    );
};
