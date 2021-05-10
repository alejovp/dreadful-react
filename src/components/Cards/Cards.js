import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'carbon-components-react';
import { Card } from '../Card';
import { LoadingCards } from '../LoadingCards';
import { NoItems } from '../NoItems';
import './cards.scss';


export const Cards = ({
    title,
    items,
    isError,
    loading = true
}) => {

    const renderItems = () => {
        if (loading) {
            return <LoadingCards />;
        }
        if (isError) {
            return <NoItems />;
        }
        return items.map((item, i) => (
            <Card key={`${i}-${item.title}`}
                  title={item.title}
                  imgSrc={item.images['Poster Art'].url}
                  releaseYear={item.releaseYear}
                  description={item.description} />
        ));
    };

    return (
        <div className="cards"
             data-testid="Cards">
            <h4 className="cards_title">{title}</h4>
            <Grid condensed>
                <Row>
                    {renderItems()}
                </Row>
            </Grid>
        </div>
    );
};

Cards.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
    isError: PropTypes.bool
};
