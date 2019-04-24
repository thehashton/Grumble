import React from "react";
import ReactDOM from "react-dom";
import Modal_Inner from './Modal_Inner';
import './modal.scss';

function Modal(props: any) {

  return ReactDOM
    .createPortal(
      <div className={props.class}>
        <span className="close-modal"></span>
        <Modal_Inner {...props} />
      </div>,
      (document.querySelector("#modal") as any as Element)
    );
}
export default Modal;