import React from 'react';
import styled from "styled-components";

const StyledOutterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;`

const StyledContainer = styled.div`
border: 2px dashed black;
width: 33%;
margin: 5%;`;

//props in this are going to come from CardList
const FollowerCard = props => {
    console.log('follower name', props.followerName);

    return (
        <StyledOutterContainer>
            <StyledContainer>
                <p>Username: {props.followerName}</p>
                <p>Type: {props.followerBio}</p>
            </StyledContainer>
        </StyledOutterContainer>
    )
}

export default FollowerCard;