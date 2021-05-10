import { Home } from '../components/Home';
import { Movies } from '../containers/Movies';
import { Series } from '../containers/Series';


export const ROUTES = {
    HOME: {
        path: '/',
        name: 'Home',
        component: Home
    },
    MOVIES: {
        path: '/movies',
        name: 'Movies',
        component: Movies
    },
    SERIES: {
        path: '/series',
        name: 'Series',
        component: Series
    },
};
