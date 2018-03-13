import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    // event.preventDefault();
    // event.persist();
    if (event.target.name === 'username') {
      this.setState({
        username: event.target.value
      }, () => console.log("username:", this.state.username));
    } else {
      this.setState({
        password: event.target.value
      }, () => console.log("password:", this.state.password));

    }
  }

  handleSubmit = (event) => {
    console.log("I'm here!")
    event.preventDefault();

    if (this.state.username !== '' && this.state.password !== '') {
      this.props.onSubmit();
    } else {
      return;
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
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
