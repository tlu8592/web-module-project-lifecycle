import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    render() {
        return (
            <div className="follower-list">
                {this.props.userFollowers.map(follower => {
                    return <Follower key={follower.id} follower={follower} />
                })}
            </div>
        );
    }
}

export default FollowerList;