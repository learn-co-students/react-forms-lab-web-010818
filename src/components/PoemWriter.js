import React from "react";

const poemIsInvalid = input => {
  const arrayOfLines = input.split('\n')
  if (arrayOfLines.length === 3) {
    const lineOne = arrayOfLines[0].split(' ').filter(el => {return el !== ''})
    const lineTwo = arrayOfLines[1].split(' ').filter(el => {return el !== ''})
    const lineThree = arrayOfLines[2].split(' ').filter(el => {return el !== ''})
    if(lineOne.length === 5
      && lineTwo.length === 3
      && lineThree.length === 5) {
        return false
    }
  }
  return true
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value:'',
      invalid:true
    };
  }

  handleChange = event => {
    console.log(poemIsInvalid(event.target.value))
    this.setState({
      value:event.target.value,
      invalid: poemIsInvalid(event.target.value)
    })
  }



  render() {
    let errorDiv = <div id="poem-validation-error" style={{color:'red'}}>
        This poem is not written in the right structure!
      </div>

    return (
      <div>
        <textarea rows="3" cols="60"
          name='poem'
          value={this.state.value}
          onChange={this.handleChange}/>

        {this.state.invalid ? errorDiv : null}
      </div>
    );
  }
}

export default PoemWriter;
