import { useState } from "react";
import Modal from "../../components/Modal";
import FormDictionary from "./_components/FormDictionary";
import FormDelete from "./_components/FormDelete";
import FormTranslate from "./_components/FormTranslate";

const Dictionary = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showTranslateModal, setShowTranslateModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  return (
    <>
      {showModal && (
        <Modal visible={showModal} onClose={closeModal}>
          <FormDictionary onClose={closeModal} />
        </Modal>
      )}
      {/* Modal para eliminar palabra */}
      {showDeleteModal && (
        <Modal visible={showDeleteModal} onClose={closeDeleteModal}>
          <FormDelete onClose={closeDeleteModal} />
        </Modal>
      )}
      {showTranslateModal && (
        <FormTranslate onClose={() => setShowTranslateModal(false)} />
      )}

      <h2>DICTIONARY USIP</h2>
      <p>
        Este <span>modulo (diccionario)</span> corresponde al recuperatorio del
        modulo-7.
      </p>
      <h2>URL</h2>
      <p>
        <a href="https://oscar-saravia.github.io/modulo7-recuperacion">
          https://oscar-saravia.github.io/modulo7-recuperacion
        </a>
      </p>

      <div className="button-container">
        <button type="button" onClick={openModal}>
          AGREGAR PALABRA
        </button>
        <button type="button" onClick={openDeleteModal}>
          ELIMINAR PALABRA
        </button>
        <button type="submit" onClick={() => setShowTranslateModal(true)}>
          TRADUCIR
        </button>
      </div>
    </>
  );
};

export default Dictionary;
