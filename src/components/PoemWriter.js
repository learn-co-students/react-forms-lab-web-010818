import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      currentText: ''

    };
  }

  checkPoem = () => {
    const poem = this.state.currentText.split(/\n/)
    if (poem.length !== 3) {
      return false
    } else {
      if (poem[0].trim().split(' ').length !== 5) {
        return false
      } else if (poem[1].trim().split(' ').length !== 3) {
        return false
      } else if (poem[2].trim().split(' ').length !== 5) {
        return false
      } else {
        return true
      }
    }
  }

  errorDiv = () => {
    if(this.checkPoem()) {
      return <div></div>
    } else {
      return (
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      )
    }
  }

  handleChange = (e) => {
    this.setState({
      currentText: e.target.value
    })
    //checks if poem is valid, if it is it'll render the div (errorDiv function)
    this.checkPoem()
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.currentText}
          onChange={this.handleChange.bind(this)}
        />
        {this.errorDiv()}
      </div>
    );
  }
}

export default PoemWriter;
