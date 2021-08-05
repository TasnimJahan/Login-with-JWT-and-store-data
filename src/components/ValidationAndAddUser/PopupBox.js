import React from 'react';
import Popup from 'reactjs-popup';
import './PopupBox.css'
import 'reactjs-popup/dist/index.css';

const PopupBox = (props) => {
    return (
        <div>
            <div className="popup-box">
      <div className="box">
        {/* <span className="close-icon" onClick={props.handleClose}>x</span> */}
        {props.content}
      </div>
    </div>
        </div>
    );
};

export default PopupBox;