import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    // debugger
    // let charLeft = this.props.maxChars - event.target.value.length
    // console.log(charLeft);

    this.setState({
    value: event.target.value,
  });
  }

  render() {
    // debugger
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <span>{this.props.maxChars - this.state.value.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
