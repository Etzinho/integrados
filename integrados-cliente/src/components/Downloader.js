import React from 'react';
import axios from 'axios';
import fileDownload from 'js-file-download';

class Downloader extends React.Component {
    componentDidMount(){
        const component = this;
        axios.get("http://localhost:8000/").then((response) => {
            if (response) {
                component.setState({files: response.data.files});
            }
        })
    }

    onDowload(url, file){
        axios({
            method:'get',
            url,
            responseType:'blob'
        })
        .then(function (response) {
            fileDownload(response.data, file);
        });
    }
    state = {
        files: []
    }
    render(){
        let files = [];
        if(this.state.files !== undefined)  {
            files = this.state.files;
        }
        return (
            <div className="downloader-container">
                {
                    files.map(file => {
                        let url = `http://localhost:8000/images/${file}`;
                        return (
                            <div className="file-avaible">
                                <img src={url} alt="File uploaded"/>
                                <h3>{file}</h3>
                                <h4 className="link" onClick={() => { this.onDowload(url, file) }}>Baixar imagem</h4>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Downloader;