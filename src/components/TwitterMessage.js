import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfChars: props.maxChars,
      value: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      numberOfChars: (this.state.numberOfChars - 1)
    })
    }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>

        <p> {this.props.maxChars} is your max</p>
        <p> {this.state.numberOfChars} is what you have left</p>
      </div>
    );
  }
}

export default TwitterMessage;
