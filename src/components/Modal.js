import React from "react";
import "../css/Modal.css";
import cross from "../static/cross.svg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="onClose">
          <img src={cross} alt="" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
