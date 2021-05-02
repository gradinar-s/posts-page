import React from "react";
import Portal from "../Portal/Portal";

import "./ModalWindow.css";

const ModalWindow = ({ isOpen, onCancel, children }) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="mw-overlay">
            <div className="mw-body">
              <span className="mw-cancel" onClick={onCancel}>
                ×
              </span>
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default ModalWindow;
