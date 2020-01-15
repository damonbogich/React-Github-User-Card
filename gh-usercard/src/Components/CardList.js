import React from 'react';
import Card from './Card';

const CardList = props => {
    // console.log(props);
    // console.log("here", props.myData);
    return (
        
        <div>
                <Card
                key = {props.myData.id}
                name = {props.myData.name}
                bio = {props.myData.bio}
                />
            
        </div>
    )
}
export default CardList;