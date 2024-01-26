import './Modal.css';
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null
	return ReactDOM.createPortal(
		<div className={'modal-overlay'}>
			<div className="modal">
				<button onClick={onClose}>Close Modal</button>
				{children}
			</div>
		</div>,
		document.getElementById("modal-root")
	)
}
export default Modal