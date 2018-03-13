import React from "react";

export default class PoemWriter extends React.Component {
  state = {poem: ''}

  handleChange = (e) => {
    this.setState( {poem: e.target.value} );
  }

  validPoem = () => {
    const lines = this.state.poem.split('\n');
    const cleanLines = lines.map((line) => {
      return line.trim();
    });
    if (cleanLines.length === 3) {
      return (
        cleanLines[0].split(' ').length === 5 &&
        cleanLines[1].split(' ').length === 3 &&
        cleanLines[2].split(' ').length === 5
      );
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange} />
        {this.validPoem() ? null : (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        )}
      </div>
    );
  }
}
