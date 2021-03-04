export const getGif = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VBLjZYc1qRIRa9XMKBJLt05CUJ8PSQG8&q=${encodeURI( category )}&limit=5`;
    const res = await fetch( url );
    const { data } = await res.json();

    const gifs = data.map( ({ id, title, images}) => {
        return {
            id,
            title,
            url: images?.downsized_medium.url
        }

    });

    return gifs;
};