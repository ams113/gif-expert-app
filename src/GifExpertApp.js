import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
    // const categories = ['HTML', 'CSS', 'JAVASCRIPT'];

    const [categories, setCategories] = useState(defaultCategories);

    /* const handleAdd = () => {
        setCategories( categories => [...categories, 'REACT'] );
    }; */


    return (
        <>
            <header>
                <div className="search">
                    <h2>GifExpertApp</h2>
                    <AddCategory setCategories={setCategories} />
                </div>
            </header>
        
            <main div className="container"> 
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </main>
        </>
    )
}
