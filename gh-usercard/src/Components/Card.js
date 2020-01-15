import React from 'react';

//props in this are going to come from CardList
const Card = props => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Bio: {props.bio}</p>
        </div>
    )
}

export default Card;