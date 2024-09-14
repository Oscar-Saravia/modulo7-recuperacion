import { motion } from "framer-motion";

const Modal = ({ visible, message, onClose, children }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <motion.div
        className="notification-success"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <p>{message}</p>
          {children}
        </div>
        <button className="close-btn-success" onClick={onClose}>
          X
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
