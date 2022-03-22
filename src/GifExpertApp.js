import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  
    const [categories, setCategories] = useState([ 'Pokemon']);
  
//   const handleAdd = () =>{
//      setCategories( [...categories, 'BeyBalde']);
//   }

    return (
        <div>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>
            <ol>
                {
                    categories.map( category => {
                        return <GifGrid 
                                    key={category}
                                    category={category}
                               />;
                    })
                }
            </ol>
        </div>
    )
}
