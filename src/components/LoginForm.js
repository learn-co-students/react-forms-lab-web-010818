import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: null,
      password: null
    };
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value= {this.state.username} onChange={this.handleUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value= {this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
