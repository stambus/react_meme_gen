import React, { Component } from "react";
import TextMeme from "./memetext";

class IMGloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_src: null,
      image_loaded: false
    };
  }
  getData = val => {
    return val;
  };

  render() {
    return (
      <div>
        <p>
          <img
            id="target"
            ref="image"
            src={this.getImageSrc()}
            className="hidden"
            alt=""
            width={300}
            height={300}
          ></img>
        </p>
        <p>
          <input
            type="file"
            onChange={this.onImageChange}
            className="filetype"
            id="group_image"
          />
        </p>
        <TextMeme sendData={this.getData.bind(this)} />
        <p>{this.state.value_from_memetext}</p>
      </div>
    );
  }
  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({ image_src: e.target.result });
        this.setState({ image_loaded: true });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  getImageSrc() {
    const defImageSrc =
      "https://d3nmt5vlzunoa1.cloudfront.net/webstorm/files/2015/10/switch-to-react-jsx.png";
    if (this.state.image_loaded === false) {
      return defImageSrc;
    } else {
      return this.state.image_src;
    }
  }
}

export default IMGloader;
