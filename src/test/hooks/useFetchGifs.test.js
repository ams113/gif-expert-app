import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Testing hooks: useFetchGifs', () => {


    test('should return initial state', () => {
        
        const { result } = renderHook( () => useFetchGifs( 'naruto' ));
        const { data, loading } = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });
    
    test('should return 5 items of the images array and loading in false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'naruto' ));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 5 );
        expect( loading ).toBe( false );

    });
    
});
