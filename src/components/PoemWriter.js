import React from "react";
import PropTypes from 'prop-types';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ''
    };
  }

  handleInputChange = event => {
    // event.preventDefault();
    // event.persist();
    this.setState({
      poem: event.target.value
    }, () => console.log(this.valid()));
  }

  // The poem has three lines.
  // The first line has five words.
  // The second line has three words.
  // The third line has five words.

  valid = () => {
    let splitPoem = this.state.poem.split("\n")
    if (splitPoem.length !== 3) {
      return false
    }
    if (splitPoem[0].trim().split(' ').length !== 5) {
      return false
    }
    if (splitPoem[1].trim().split(' ').length !== 3) {
      return false
    }
    if (splitPoem[2].trim().split(' ').length !== 5) {
      return false
    }
    return true
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleInputChange}/>
        {!this.valid() && <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
