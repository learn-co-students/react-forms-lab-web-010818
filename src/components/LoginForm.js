import React from 'react';

export default class LoginForm extends React.Component {
  state = {username: '', password: ''};

  handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    const username = this.state.username;
    const password = this.state.password;
    if (username && password) {
      this.props.onSubmit({ username, password });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id='test-username' type='text' name='username' value={this.state.username} onChange={this.handleInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id='test-password' type='password' name='password' value={this.state.password} onChange={this.handleInput} />
          </label>
        </div>
        <div>
          <button type='submit'>Log in</button>
        </div>
      </form>
    );
  }
}
