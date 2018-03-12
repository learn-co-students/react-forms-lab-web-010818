import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    if (event.target.name === 'username') {
      this.setState({
        username:event.target.value
      })
    }
    else {
      this.setState({
        password:event.target.value
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.onSubmit({username:this.state.username, password:this.state.password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange} />
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
