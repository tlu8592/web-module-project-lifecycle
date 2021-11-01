import React from 'react';

class Follower extends React.Component {
    render() {
        return (
            <div className="follower-box">
                <img src={this.props.follower.avatar_url} alt="user follower" />
                <p>{this.props.follower.login}</p>
            </div>
        )
    }
}

export default Follower;