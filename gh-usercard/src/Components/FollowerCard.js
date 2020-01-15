import React from 'react';

//props in this are going to come from CardList
const FollowerCard = props => {
    console.log('follower name', props.followerName);

    return (
        <div>
            <p>Username: {props.followerName}</p>
            <p>Type: {props.followerBio}</p>
        </div>
    )
}

export default FollowerCard;