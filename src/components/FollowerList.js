import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    render() {
        return (
            <div className="follower-list">
                <h2>Followers:</h2>
                <div className="flex-container">
                    {this.props.userFollowers.map(follower => {
                        return <Follower key={follower.id} follower={follower} />
                    })}
                </div>
            </div>
        );
    }
}

export default FollowerList;