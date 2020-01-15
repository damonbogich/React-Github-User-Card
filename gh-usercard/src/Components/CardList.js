import React from 'react';
import Card from './Card';
import styled from "styled-components";

const StyledOutterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;`

const StyledContainer = styled.div`
border: 2px dashed black;
width: 33%;
margin: 5%;`;

const CardList = props => {
    // console.log(props);
    // console.log("here", props.myData);
    return (
        
        <StyledOutterContainer>
            <StyledContainer>
                <Card
                key = {props.myData.id}
                name = {props.myData.name}
                bio = {props.myData.bio}
                />
            </StyledContainer>
        </StyledOutterContainer>
    )
}
export default CardList;