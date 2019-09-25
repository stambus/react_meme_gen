import React, { Component } from "react";

class ImageLoader extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img src={this.props.getImageSrc} style={{ width: "100%" }} alt="" />
          <div className="bot-centered">{this.props.imageBotText}</div>
          <div className="top-centered">{this.props.imageTopText}</div>
        </div>
        <p>
          <input
            type="file"
            onChange={this.props.onImageChange.bind(this)}
            className="filetype"
            id="group_image"
          />
        </p>
      </div>
    );
  }
}

export default ImageLoader;
