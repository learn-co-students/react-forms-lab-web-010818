import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      validity: false
    };
  }

  handleChange = event => {
    this.setState({
      poem: event.target.value,
      validity: this.poemCheckHelper(event.target.value)
    })
  }

  poemCheckHelper(poem) {
    let linesArr = poem.split("\n").map(line => line.trim());
    if (linesArr.length === 3 &&
      linesArr[0].split(" ").length === 5 &&
      linesArr[1].split(" ").length === 3 &&
      linesArr[2].split(" ").length === 5) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} />
        {this.state.validity ? null : (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        )}
      </div>
    );
  }
}

export default PoemWriter;
