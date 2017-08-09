import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      errorCheck: "This poem is not written in the right structure!"
    };
  }



  checkPoem = (poem) => {
    poem = poem.split(/\n/)
    let threeLines = poem.map(function (line) {
      return line.trim()
    })
    console.log(threeLines)
    console.log(threeLines.length)
    if (threeLines.length === 3) {
      if (threeLines[0].split(" ").length === 5 &&
          threeLines[1].split(" ").length === 3 &&
          threeLines[2].split(" ").length === 5) {

            return true
      }
      else {
          return false
      }

    }

  }



  updateText = (event) => {
    let currentText = ""
    this.setState({
      text: event.target.value
    }, () => {return currentText = this.state.text} )
  }


  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.text}
          onChange={this.updateText}
        />

        {this.checkPoem(this.state.text) ? null : <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >"This poem is not written in the right structure!"
        </div>
      }

      </div>
    );
  }
}

export default PoemWriter;
