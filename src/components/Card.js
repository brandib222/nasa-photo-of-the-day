import React from 'react';
import styled from 'styled-components';

const StyledFriend = styled.div
`
.title {
    color: #B2B1B9;
    background-color: #2C2E43;
    padding: 5%;
    display: flex;
    text-align: center;
    justify-content: center;
}

.date {
    color: #B2B1B9;
    background-color: #2C2E43;
    padding: 5%;
    display: flex;
    text-align: center;
    justify-content: center;
}
    
}
img {
    max-width:80%;
    height:20%;

   
}

.explanation {
    color: #B2B1B9;
    background-color: #2C2E43;
    padding: 5%;
    display: flex;
    text-align: center;
}
`

const Card = (props) => {

    return (
        <StyledFriend>
            <h1 className='title'>{props.data.title}</h1>
            <h2 className='date'>{props.data.date}</h2>
            <img src = {props.data.hdurl} alt='Space'/>
            <p className='explanation'>{props.data.explanation}</p>
        </StyledFriend>
    )
}

export default Card;