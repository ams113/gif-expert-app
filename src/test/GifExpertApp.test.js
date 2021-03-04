import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Testing App: GifExpertApp', () => {
    
    test('should renders correctly', () => {

        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('should renders category list', () => {

        const categories = ['naruto', 'goku']
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length );
    });

});
