import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  validPoem(){
    let lines = this.state.value.split('\n').map(line => line.trim())
    let numOfWords = (line) => {
      return line.split(' ').length
    }
    if (lines.length === 3){
      if (numOfWords(lines[0]) === 5 && numOfWords(lines[1]) === 3 && numOfWords(lines[2]) === 5 ){
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} value={this.state.value} rows="3" cols="60" />
          {this.validPoem() ? null : (
            <div id="poem-validation-error" style={{ color: "red" }}>
              This poem is not written in the right structure!
            </div>
          )}
      </div>
    );
  }
}

export default PoemWriter;
