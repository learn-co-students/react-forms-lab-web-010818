import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      charsLeft: props.maxChars
    };
  }

  handleChange = (e) => {
    this.decrementCounter(e);
    this.setState({
      message: e.target.value
    })
  }

  decrementCounter = (e) => {
    this.setState({
      charsLeft: this.state.charsLeft - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange}/><br />
        <div>{this.state.charsLeft}</div>
      </div>
    );
  }
}

export default TwitterMessage;
