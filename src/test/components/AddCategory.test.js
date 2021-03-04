import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';

describe('Testing components: AddCategory', () => {
    
    const setCategories = jest.fn();

    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    
    beforeEach( () => {
        
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    });

    test('should renders correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('should change the value of the input', () => {

        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'foo'} });

        expect( wrapper.find('input').prop('value') ).toBe('foo');
    });

    test('should not post info with event submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('should call setCategories and clean text input', () => {

        const value = 'foo';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
});


    

