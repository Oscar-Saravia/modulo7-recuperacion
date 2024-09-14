import { useDispatch, useSelector } from "react-redux";
import { deleteWord } from "../../../redux/dictionary/dictionaryActions";
import useForm from "../../../hooks/useForm";
import { useState } from "react";
import Modal from "../../../components/Modal";

const FormDelete = ({ onClose }) => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const dictionary = useSelector((state) => state.dictionary.DICTIONARY);

  const [values, handleChange] = useForm({ word: "" });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const findDeleteWord = dictionary.find(
      (item) =>
        item.spanish.toLowerCase() === values.word.toLowerCase() ||
        item.english.toLowerCase() === values.word.toLowerCase() ||
        item.portuguese.toLowerCase() === values.word.toLowerCase()
    );

    if (!findDeleteWord) {
      setShowErrorModal(true);
      return;
    }

    dispatch(deleteWord(values.word));
    onClose();
  };

  return (
    <>
      {showErrorModal && (
        <Modal
          visible={showErrorModal}
          message="No se encontró la palabra en el diccionario"
          onClose={() => setShowErrorModal(false)}
        />
      )}
      <h3>Traductor USIP</h3>
      <p>Que palabra desea eliminar del diccionario</p>
      <p>Puede escribir su palabra en Español, Ingles o Portugues.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="word">Palabra a eliminar:</label>
          <input
            type="text"
            id="word"
            name="word"
            value={values.word}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit">ELIMINAR</button>
        </div>
      </form>
    </>
  );
};

export default FormDelete;
