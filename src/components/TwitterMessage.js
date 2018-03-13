import React from "react";

export default class TwitterMessage extends React.Component {
  state = { value: '' };

  handleChange = (e) => {
    this.setState({ value: e.target.value});
  }

  remainingChar = () => {
    return this.props.maxChars - this.state.value.length;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>You have {this.remainingChar()} characters left.</p>
      </div>
    );
  }
}
