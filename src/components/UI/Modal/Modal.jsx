import React from "react";
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Modal = (props) => {
  const Backdrop =(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
  }

  const ModalOverlays =(props) =>{
    return (
      <div className={classes.modelOverlays}>{props.children}</div>
    )
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('overlays'))}
      {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, document.getElementById('overlays'))}
    </React.Fragment>
  )
};

export default Modal;
