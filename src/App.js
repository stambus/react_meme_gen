import React, { Component } from "react";
import "./App.css";
import ImageLoader from "./components/imageloader";

class App extends Component {
  state = {
    imageSource: null,
    imageName: null,
    imageLoaded: false,
    imageBotText: "Initial meme bot text on image",
    imageTopText: "Initial meme top text on image"
  };

  getImageSrc() {
    const defImageSrc =
      "https://d3nmt5vlzunoa1.cloudfront.net/webstorm/files/2015/10/switch-to-react-jsx.png";
    if (this.state.imageLoaded === false) {
      return defImageSrc;
    } else {
      return this.state.imageSource;
    }
  }

  handleChangeBotText(event) {
    this.setState({ imageBotText: event.target.value }, function() {});
  }
  handleChangeTopText(event) {
    this.setState({ imageTopText: event.target.value }, function() {});
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({ imageSource: e.target.result });
        this.setState({ imageLoaded: true });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  render() {
    return (
      <div>
        <p>
          <input
            placeholder="Initial bot"
            type="text"
            onChange={this.handleChangeBotText.bind(this)}
          />
          <input
            placeholder="Initial top"
            type="text"
            onChange={this.handleChangeTopText.bind(this)}
          />
        </p>
        <p>{this.state.imageText}</p>
        <ImageLoader
          onImageChange={this.onImageChange}
          getImageSrc={this.getImageSrc()}
          imageBotText={this.state.imageBotText}
          imageTopText={this.state.imageTopText}
        />
      </div>
    );
  }
}

export default App;
