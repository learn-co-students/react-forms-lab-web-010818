import React from "react";

const isValidPoem = poem => {
  const lines = poem.split("\n").map(line => line.trim())
  const poemLines = lines.length === 3
  if (poem && poemLines) {
    return(
      lines[0].split(" ").length === 5 &&
      lines[1].split(" ").length === 3 &&
      lines[2].split(" ").length === 5
    )
  } else {
    return false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      isValid: true,
    };
  }

  handleChange = (event) => {
    const content = event.target.value
    this.setState({ content, isValid: isValidPoem(content) })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {!this.state.isValid ?
        (<div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>) : null}
      </div>
    );
  }
}


export default PoemWriter;
