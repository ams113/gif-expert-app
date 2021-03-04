import { getGif } from "../../helpers/getGifs";

describe('Testing helpers: getGifs', () => {

    test('should get 5 items', async( ) => {

        const items = await getGif('hello');
        expect( items.length ).toBe( 5 );
    });

    test('should get 0 items', async( ) => {

        const items = await getGif('');
        expect( items.length ).toBe( 0 );
        
    });
    

});
