import React, {useState} from 'react';
import styles from './SprintCard.module.css'
import SprintUpdateModal from "@/views/ProjectDashboard/components/SprintUpdateModal";
const SprintCard = ({ sprint }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return  (

   <div className={styles.card} onClick={handleOpenModal}>
     <h3>{sprint.name}</h3>
     <p>{sprint.priority}</p>
     <SprintUpdateModal isOpen={isModalOpen} onClose={handleCloseModal} sprint={sprint} />
   </div>
  );
}


export default SprintCard;
