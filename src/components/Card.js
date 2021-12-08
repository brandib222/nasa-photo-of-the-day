import React from 'react';

const Card = (props) => {

    return (
        <div className='card-container'>
            <h1 className='title'>{props.data.title}</h1>
            <img src = {props.data.hdurl} alt='Space'/>
            <p className='explanation'>{props.data.explanation}</p>
        </div>
    )
}

export default Card;