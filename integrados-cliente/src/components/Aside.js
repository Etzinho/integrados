import React from 'react';
import '../sass/Aside.scss';
const Aside = ({ onImage, onMenu }) => {
    return (
        <div className="aside-bar">
            <div className="aside-upload-image">
                <label htmlFor="uploadInput" className="link">Selecione uma imagem</label>
                <input onInput={onImage} className="d-none" type="file" name="rawImage" id="uploadInput"/>
            </div>
            <ul className="aside-menu">
                <li className="menu-option">
                    <span className="link" onClick={() => { onMenu("upload") }}>Inicio</span>
                </li>
                <li className="menu-option">
                    <span className="link" onClick={() => { onMenu("download") }}>Baixar imagens</span>
                </li>
            </ul>
        </div>
    );
}

export default Aside;