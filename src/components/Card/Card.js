import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Column, SkeletonPlaceholder } from 'carbon-components-react';
import { textSlicer } from '../../services/helpers';
import './card.scss';


export const Card = ({
    title,
    imgSrc,
    releaseYear,
    description
}) => {
    const [showCardInfo, setShowCardInfo] = useState(false);
    const [isLoadingImg, setIsLoadingImg] = useState(true);

    const onMouseEnterHanlder = useCallback(
        () => setShowCardInfo(true), []);

    const onMouseLeaveHanlder = useCallback(
        () => setShowCardInfo(false), []);

    const onLoadImgHandler = useCallback(
        () => setIsLoadingImg(false), []);

    const renderCardInfo = () => {
        if (showCardInfo) {
            return (
                <>
                    <p className="card_info_year">
                        {releaseYear}
                    </p>
                    <p className="card_info_description">
                        {textSlicer(description, 140)}
                    </p>
                </>
            );
        }

        return null;
    };

    const renderCardImage = () => {
        if (isLoadingImg) {
            return <SkeletonPlaceholder className="card_loading_img" />;
        }
    };

    return (
        <Column
            sm={4}
            md={2}
            lg={2}>
            <div className="card"
                 onMouseEnter={onMouseEnterHanlder}
                 onMouseLeave={onMouseLeaveHanlder}>
                {renderCardImage()}
                <img className={`card_img ${isLoadingImg ? 'card_img-hide' : ''}`}
                     src={imgSrc}
                     alt={title}
                     onLoad={onLoadImgHandler} />
                <div className={`card_info ${showCardInfo ? 'card_info-show' : ''}`}>
                    <h6 className="card_info_title">
                        {textSlicer(title, 25)}
                    </h6>
                    {renderCardInfo()}
                </div>
            </div>
        </Column>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    releaseYear: PropTypes.number,
    description: PropTypes.string
};
