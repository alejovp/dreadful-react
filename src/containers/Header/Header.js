import React, { useCallback, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Header as CarbonHeader,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderGlobalBar
} from 'carbon-components-react';
import { DispatchContext, StateContext } from '../../contexts/AppStore';
import { Logo } from '../../components/Logo';
import { ROUTES } from '../../router/routes';
import { HeaderFilters } from '../HeaderFilters';
import { toggleShowFilters } from '../../contexts/actions';
import { FatButton } from '../../components/FatButton';
import { Icon } from '../../components/Icon';
import loginIcon from '../../assets/icon-login.png';
import filterIcon from '../../assets/icon-filter.png';
import seriesIcon from '../../assets/icon-series.png';
import moviesIcon from '../../assets/icon-movies.png';
import './header.scss';


export const Header = () => {
    const { pathname } = useLocation();
    const { showFilters } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const onFiltersClick = useCallback((e) => {
        e.preventDefault();
        dispatch(toggleShowFilters());
    }, [dispatch]);

    const checkPathMatch = useCallback((path) => {
        return pathname === path;
    }, [pathname]);

    const renderFiltersButton = () => {
        if (checkPathMatch(ROUTES.HOME.path)) {
            return null;
        }
        return (
            <HeaderMenuItem element={Link}
                            className="header-globar-bar_filters"
                            isCurrentPage={showFilters}
                            to="#"
                            onClick={onFiltersClick} >
                <Icon src={filterIcon} left/>
                Filters
            </HeaderMenuItem>
        );
    };

    return (
        <>
            <CarbonHeader aria-label="app-header"
                          data-testid="Header"
                          className="app-header">
                <HeaderName element={Link}
                            to={ROUTES.HOME.path}
                            className="header-name"
                            prefix=""
                            data-testid="HeaderName">
                    <Logo />
                </HeaderName>
                <HeaderNavigation aria-label="app-header">
                    <HeaderMenuItem element={Link}
                                    to={ROUTES.MOVIES.path}
                                    isCurrentPage={checkPathMatch(ROUTES.MOVIES.path)}>
                        <Icon src={moviesIcon} left/>
                        Movies
                    </HeaderMenuItem>
                    <HeaderMenuItem element={Link}
                                    to={ROUTES.SERIES.path}
                                    isCurrentPage={checkPathMatch(ROUTES.SERIES.path)}>
                        <Icon src={seriesIcon} left/>
                        Series
                    </HeaderMenuItem>
                </HeaderNavigation>
                <HeaderGlobalBar className="header-globar-bar">
                    <HeaderNavigation aria-label="app-header">
                        {renderFiltersButton()}
                        <HeaderMenuItem className="header-globar-bar_login"
                                        element={Link}
                                        to="#">
                            Login
                            <Icon src={loginIcon} right/>
                        </HeaderMenuItem>
                    </HeaderNavigation>
                    <div className="header-subs-button">
                        <FatButton className="header-fat-button">
                            Start your free trial
                        </FatButton>
                    </div>
                </HeaderGlobalBar>
            </CarbonHeader>
            <HeaderFilters open={showFilters} />
        </>
    );
};
