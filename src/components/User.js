import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div className="user">
                <div className="user-img">
                    <img src={this.props.userInfo.avatar_url} alt="user" />
                </div>
                <div className="user-info">
                    <div className="text1">
                        <h2>{this.props.userInfo.name}</h2>
                        <p>({this.props.userInfo.login})</p>    
                    </div>
                    <div className="text2">
                        <p>Total Repos: {this.props.userInfo.public_repos}</p>
                        <p>Total Followers: {this.props.userInfo.followers}</p> 
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default User;