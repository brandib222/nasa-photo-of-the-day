import React from 'react';
import styled from 'styled-components';

const StyledFriend = styled.div
`
.title {
    color: #B2B1B9;
    background-color: #595260;
    background: url('https://images.unsplash.com/photo-1505322022379-7c3353ee6291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNwYWNlJTIwaGR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60') no-repeat center center;
	background-size: cover;
	color: #fff;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;

    padding: 2%;
    display: flex;
    text-align: center;
    justify-content: center;
    box-shadow: 5px 10px #FFD523;
    font-size: 90px;
    font-weight: 900;

    
}

.date {
    color: white;
    font-size: 50px;
    padding: 5%;
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #e5e5f7;
    opacity: 95%;
    background: url('https://images.unsplash.com/photo-1532798369041-b33eb576ef16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHNwYWNlJTIwaGR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60') no-repeat center center;
    background-size: cover;
    box-shadow: 0 0 20px;
    border-radius: 5px;

}
    
}
img {
    max-width:80%;
    height:20%;
    box-shadow: 0 0 10px;
    border-radius: 10px;
}

.explanation {
    color: #B2B1B9;
    background-color: #2C2E43;
    font-size: 20px;
    padding: 5%;
    display: flex;
    text-align: center;
    box-shadow: 0 0 10px;
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