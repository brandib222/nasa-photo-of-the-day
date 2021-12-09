import React from 'react';
import styled from 'styled-components';

const StyledFriend = styled.div
`
.title {
    color: #B2B1B9;
    background-color: #595260;
    background: url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60') no-repeat center center;
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
    
}

.date {
    color: #B2B1B9;
    font-size: 50px;
    padding: 5%;
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #e5e5f7;
    opacity: 0.8;
    background: url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60') no-repeat center center;
    background-size: cover;
    box-shadow: 0 0 15px;

}
    
}
img {
    max-width:80%;
    height:20%;
    box-shadow: 0 0 10px;
   
}

.explanation {
    color: #B2B1B9;
    background-color: #2C2E43;
    font-size: 20px;
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