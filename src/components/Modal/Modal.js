import ReactDOM from 'react-dom';
import './Modal.css';
import PropTypes from "prop-types";

function Modal({ header, children, updateModalState }) {

  const onCloseHandler = () => {
    updateModalState();
  };

  return ReactDOM.createPortal(
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={onCloseHandler}>&times;</span>
          <h2>{header}</h2>
        </div>
        <div className="modal-body">
          <div className="content">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.propTypes = {
  header: PropTypes.string,
  updateModalState: PropTypes.func,
  children: PropTypes.array
};

export default Modal;
