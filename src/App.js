import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchUser: "tlu8592",
      userInfo: {},
      userFollowers: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.searchUser}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          ...this.state,
          userInfo: response.data
        })
      })
      .catch(error => console.log("errors", error));
    
    axios.get(`https://api.github.com/users/${this.state.searchUser}/followers`)
      .then(response => {
        console.log(response.data);
        this.setState({
          ...this.state,
          userFollowers: response.data
        })
      })
      .catch(error => console.log("errors", error))
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      searchUser: event.target.value
    });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      searchUser: ""
    });
  }

  render() {
    return (
      <div>
        <h1>GitHub Info</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchUser}
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
        <User userInfo={this.state.userInfo} />
        <FollowerList userFollowers={this.state.userFollowers} />
      </div>);
  }
}

export default App;
