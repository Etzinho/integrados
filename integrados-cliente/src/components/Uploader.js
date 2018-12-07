import React from 'react';

const Uploader = ({ src, image, onSend }) => {
    let preview = ""
    let menu = ""
    if (src !== undefined) {
        preview = (
            <img className="uploader-uploaded-preview" src={src} alt={image}/>
        )
        menu = (
            <div className="uploader-menu">
                <h4>{image}</h4>
                <span className="link" onClick={onSend}>Enviar imagem</span>
            </div>
        );
    } else {
        preview = (
            <div className="uploader-uploaded-preview">
                <h2>Faça o upload de uma imagem</h2>
            </div>
        )
        menu = (
            <div className="uploader-menu">
                
            </div>
        )
    }
    return (
        <div className="uploader-container">
            {preview}
            {menu}
        </div>
    );
}

export default Uploader;