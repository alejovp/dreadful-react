import React from 'react';
import { render, screen, cleanup, fireEvent } from '../src/services/utils';
import { Card } from '../src/components/Card';
import { textSlicer } from '../src/services/helpers';


const itemMock = {
    title: 'Frasier',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    programType: 'series',
    images: {
        'Poster Art': {
            url: 'http://streamcoimg-a.akamaihd.net/000/120/27/12027-PosterArt-3f8c0625d76d30c9a583c647e4c29c67.jpg',
            width: 1000,
            height: 1500
        }
    },
    releaseYear: 1994
};

afterEach(cleanup);

describe('Card', () => {
    const { title, releaseYear, description, images } = itemMock;
    const imgSrc = images['Poster Art'].url;

    it('should render a title and a image', () => {
        textSlicer.mockImplementation((text) => text);
        render(<Card title={title}
                     imgSrc={imgSrc}
                     releaseYear={releaseYear}
                     description={description} />);

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByAltText(title)).toHaveAttribute('src', imgSrc);
        expect(screen.queryByText(description)).not.toBeInTheDocument();
    });

    test('if the title has more than 25 chars will be cropped', () => {
        const largeTitle = 'Qui laborum est voluptate magna eu reprehenderit anim excepteur';
        const shorterTitle = 'Short';
        textSlicer.mockImplementation(() => shorterTitle);
        render(<Card title={largeTitle}
                     imgSrc={imgSrc} />);
        expect(textSlicer).toBeCalledWith(largeTitle, 25);
        expect(screen.getByText(shorterTitle)).toBeInTheDocument();
    });

    it('should also render a description and year when mouse enter', () => {
        const shorterText = 'Hola que tal';
        textSlicer.mockImplementation(() => shorterText);
        const { getByAltText, getByText, queryAllByText } = render(
            <Card title={title}
                  imgSrc={imgSrc}
                  releaseYear={releaseYear}
                  description={description} />
        );

        fireEvent.mouseEnter(getByAltText(title));
        expect(textSlicer).toBeCalledWith(description, 140);
        expect(getByText(releaseYear)).toBeInTheDocument();
        expect(queryAllByText(shorterText)[1]).toBeInTheDocument();
    });

});
