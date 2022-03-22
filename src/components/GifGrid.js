import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );


    return (
        <>
            <div className='card mb-3 padding-card'>
                <h3>{ category.replace(/\b\w/g, l => l.toUpperCase()) }</h3>
                { loading && <p className='animate__animated animate__flash'>Loading...</p> }
                <div className='row mb-3'>
                    {
                        images.map(  img => (

                            <GifGridItem  
                                key = { img.id }
                                {...img}
                            />

                        ))
                    }
                </div>
            </div>
        </>
    )
}
