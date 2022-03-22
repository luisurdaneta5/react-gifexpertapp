import React from 'react'

export const GifGridItem = ({ id, title, url}) => {

 
    return (
        <div className='col-6 col-lg-3 mb-3'>
            <div className='card cardclass animate__animated animate__flipInX'>
                <img className='card-img-top imgcard' src={url} alt={title}/>    
                <div className='card-body'>
                    <h5 className='card-title'>{ title }</h5>
                </div>
            </div>
        </div>
    )
}
