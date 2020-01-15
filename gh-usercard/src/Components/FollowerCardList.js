import React from 'react';
import FollowerCard from './FollowerCard';

const FollowerCardList = props => {
    console.log(props);
    // console.log("here", props.followerData);
    return (
        
        <div>
            {props.followerData.map(follower => {
                // console.log('right now here!', follower);
                return (
                <FollowerCard
                key = {follower.id}
                followerName = {follower.login}
                followerBio = {follower.type}
                />
                 )
            })}
                
            
        </div>
    )
}
export default FollowerCardList;