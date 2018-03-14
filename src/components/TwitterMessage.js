import React from "react";
import PropTypes from "prop-types"

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message:""};
  }
  setMessage=event=>{
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.setMessage}/>
        <div>{this.props.maxChars-this.state.message.length}</div>
      </div>
    );
  }
}

TwitterMessage.propTypes={
  maxChars: PropTypes.number
}

TwitterMessage.defaultProps={
  maxChars: 140
}

export default TwitterMessage;
