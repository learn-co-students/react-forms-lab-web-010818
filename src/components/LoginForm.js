import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  input = (event) => {
    if (event.target.name === 'username') {
      this.setState({
        username: event.target.value
      });
    } else if (event.target.name === 'password') {
      this.setState({
        password: event.target.value
      });
    }
  }

  submitted = (event) => {
    event.preventDefault();
    if (this.state.username.length > 0 && this.state.password > 0) {
      this.props.onSubmit();
    }
  }

  render() {
    return (
      <form onSubmit={this.submitted}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.input}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.input}/>
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
