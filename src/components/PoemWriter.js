import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      validPoem: false
    };
  }

  valid(poem) {
    let rows = poem.split('\n');
    if (rows.length === 3) {
      if (rows[0].trim().split(' ').length === 5 && rows[1].trim().split(' ').length === 3 && rows[2].trim().split(' ').length === 5) {
        this.setState({
          validPoem: true
        });
      } else {
        this.setState({
          validPoem: false
        })
      }
    }
  }

  text = (event) => {
    this.setState({
      text: event.target.value
    });
    this.valid(event.target.value);
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.text}/>
        {this.state.validPoem ? null : <div id="poem-validation-error" style={{ color: "red" }}>'This poem is not written in the right structure!'</div>}
      </div>
    );
  }
}

export default PoemWriter;
