import React, { Component } from "react";

class TextMeme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Initial value"
    };
  }
  handleChange(event) {
    this.setState({ value: event.target.value }, function() {
      console.log(this.state.value);
    });
    this.props.sendData(this.state.value);
  }

  render() {
    return (
      <div>
        <p>
          <textarea
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </p>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default TextMeme;
