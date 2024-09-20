import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backfropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  visible: {
    y: '200px',
    opacity: 1,
  },
  hidden: {
    y: '-100vh',
    opacity: 0,
    transition: { delay: 0.5 },
  },
};

type ModalTypes = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  resetPizza: () => void;
};

const Modal = ({ showModal, resetPizza }: ModalTypes) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backfropVariants}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <motion.div className="modal" variants={modalVariants}>
            <p>Want to make another Pizza?</p>
            <Link to="/pizza">
              <button onClick={resetPizza} className="btn">
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
