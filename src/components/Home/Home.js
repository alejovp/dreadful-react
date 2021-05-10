import React from 'react';
import { ROUTES } from '../../router/routes';
import { ImgPanel } from '../ImgPanel';
import moviesImgSrc from '../../assets/movies.png';
import seriesImgSrc from '../../assets/series.png';
import './home.scss';


export const Home = () => {
    return (
        <div className="home"
             data-testid="Home">
            <ImgPanel className="home_panel"
                      buttonText="Movies"
                      to={ROUTES.MOVIES.path}
                      imgSrc={moviesImgSrc} />
            <ImgPanel className="home_panel"
                      buttonText="Series"
                      to={ROUTES.SERIES.path}
                      imgSrc={seriesImgSrc} />
        </div>
    );
};
