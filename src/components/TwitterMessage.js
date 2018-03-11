import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.value} type="text" />
        <p> You have {this.props.maxChars - this.state.value.length} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
