import React, { Component } from 'react';
import Aside from './Aside';
import Uploader from './Uploader';
import Downloader from './Downloader';
import '../sass/App.scss';
import axios from 'axios';

class App extends Component {
    constructor(props) {
      super(props);
      this.selectImage = this.selectImage.bind(this);
      this.sendImage = this.sendImage.bind(this);
      this.onMenu = this.onMenu.bind(this);
    }

    state = {
      src: undefined,
      image: undefined,
      file: undefined,
      display: "upload"
    }

    selectImage(event) {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        var reader = new FileReader();
        const component = this;
        reader.onload = function(e) {
          component.setState({ 
            src: e.target.result,
            image: file.name.split('.')[0],
            file
          });
        }
        reader.readAsDataURL(file);
      }
    }

    sendImage() {
      const data = new FormData();
      const headers = { "Content-Type": "multipart/form-data" };
      data.append("image", this.state.file, this.state.file.name);
      axios.post("http://localhost:8000/upload/", data, headers).then(response => {
        alert(response.data.mensagem);
      })
    }

    onMenu( menu ) {
      this.setState({display: menu});
    }

    render(){
      let display = <Uploader src={ this.state.src } image={ this.state.image } onSend={this.sendImage} />
      if ( this.state.display !== "upload") {
        display = <Downloader  />
      }
      return (
        <div className="App">
          <Aside onImage={ this.selectImage } onMenu={ this.onMenu } />
          {display}
        </div>
      );
    }
}

export default App;
