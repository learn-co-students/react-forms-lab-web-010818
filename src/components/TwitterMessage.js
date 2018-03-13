import React from "react";
import PropTypes from 'prop-types';


class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
          />
        <p>Characters Remaining: {this.props.maxChars - this.state.input.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
