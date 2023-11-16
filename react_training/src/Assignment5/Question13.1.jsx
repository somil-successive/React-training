import Modal from "./Question13.2";
import useModal from "./Question13.3";

const CustomModal = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <h4>React customizable modal</h4>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <h4>custom modal</h4>
      </Modal>
    </>
  );
};
export default CustomModal;
