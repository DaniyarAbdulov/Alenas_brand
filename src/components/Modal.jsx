import React from "react";

const Modal = ({isVisible, onClose, children}) => {
    if (!isVisible) return null;
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }
  return (
    <div
    onClick={handleClose} 
    id="wrapper"
    className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className=" w-3/4 flex flex-col">
        <button
        onClick = {() => onClose()} 
        className="text-white text-lg place-self-end">
            X
        </button>
        <div className="bg-white rounded p-2 ">
            {children}
        </div>

      </div>
    </div>
  );
};

export default Modal;
