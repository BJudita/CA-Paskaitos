import  { useState } from 'react';
import styles from "./SideInPanel.module.css"
import Modal from '../Modal/Modal';

const SlideInPanel = ({ closePanel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className={styles.panel}>
<button onClick={closePanel}>Uždaryti Panelį</button>
      <button onClick={() => setIsModalOpen(true)}>Atidaryti Modalą</button>

      <Modal 
        title="Mano Modalas" 
        footerText="Papildoma informacija" 
        open={isModalOpen} 
        setOpen={setIsModalOpen}
      >
        <h4>Ar norite tęsti?</h4>
        <button onClick={() => setIsModalOpen(false)}>Taip</button>
        <button onClick={() => setIsModalOpen(false)}>Ne</button>
      </Modal>
    </div>
  );
};
export default SlideInPanel;