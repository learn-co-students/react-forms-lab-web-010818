import React from "react";

const isValidPoem = content => {
  let lines = content.split("\n").map(line => line.trim())
  if (lines.length === 3) {
    return (
      lines[0].split(" ").length === 5 &&
      lines[1].split(" ").length === 3 &&
      lines[2].split(" ").length === 5
    )
  } else {
    return false;
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      isValid: true
    };
  }

  handleChange = event => {
    this.setState({
      poem: event.target.value,
      isValid: isValidPoem(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange}/>
        {!this.state.isValid ?
        (<div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>) : null
        }
      </div>
    );
  }
}

export default PoemWriter;
