import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Testing components: GifGridItem', () => {
    
    const title = 'fakeText';
    const url ='https://fake.dev/picture/fake.giff';
    
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('should renders correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('should tag <p></p> with title ', () => {

        expect( wrapper.find('p').text().trim() ).toBe( title );
    });
    
    test('should contain the [src] and [alt] attributes of the image as the props', () => {

        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('should contain animate__fadeIn class', () => {

        const article = wrapper.find('article');
        const className = article.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe(true);

    });

    test('should show a default title if the props is empty', () => {

        const wrapper = shallow( <GifGridItem title={ '' } url={ url } /> );
        expect( wrapper.find('p').text().trim() ).toBe( 'Without title' );

    });
    

});
