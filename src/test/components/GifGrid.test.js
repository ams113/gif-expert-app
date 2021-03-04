import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Testing components: GifGrid', () => {
    
    const category = 'foo';
    
    test('should renders correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show items when loaded correctly', () => {

        const gifs = [
            {
                id: 'f00',
                title: 'foo',
                url: 'https://fake.dev/picture/fake.giff'
            },
            {
                id: 'f01',
                title: 'foo',
                url: 'https://fake.dev/picture/fake.giff'
            }
    ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    
})
