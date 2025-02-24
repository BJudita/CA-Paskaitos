import ReactDOM from 'react-dom';
import styles from "./Modal.module.css"

const Modal = ({ title, children, footerText, open, setOpen }) => {
    if (!open) {
        return null;
      }
  
    return ReactDOM.createPortal(
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <h2>{title}</h2>
          {children}
          <footer>{footerText}</footer>
          <button onClick={() => setOpen(false)}>Uždaryti</button>
        </div>
      </div>,
      document.body
  );
};
export default Modal;