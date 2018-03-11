import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usernameValue: '',
      passwordValue: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
  }

  handlePasswordChange = (event) => {
    this.setState({passwordValue: event.target.value})
  }

  handleUsernameChange = (event) => {
    this.setState({usernameValue: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input value={this.state.usernameValue} onChange={this.handleUsernameChange} id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.passwordValue} onChange={this.handlePasswordChange} id="test-password" type="password" />
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
