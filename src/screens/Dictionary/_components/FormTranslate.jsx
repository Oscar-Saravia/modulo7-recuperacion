import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../../components/Modal";

const FormTranslate = ({ onClose }) => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const dictionary = useSelector((state) => state.dictionary.DICTIONARY);
  const [wordToTranslate, setWordToTranslate] = useState("");
  const [language, setLanguage] = useState("");
  const [translation, setTranslation] = useState("");

  const handleTranslate = (e) => {
    e.preventDefault();

    const translatedWord = dictionary.find(
      (item) =>
        item.spanish.toLowerCase() === wordToTranslate.toLowerCase() ||
        item.english.toLowerCase() === wordToTranslate.toLowerCase() ||
        item.portuguese.toLowerCase() === wordToTranslate.toLowerCase()
    );

    if (translatedWord) {
      if (language === "Ingles") {
        setTranslation(translatedWord.english);
      } else if (language === "Portugues") {
        setTranslation(translatedWord.portuguese);
      } else if (language === "Español") {
        setTranslation(translatedWord.spanish);
      }
    } else {
      setShowErrorModal(true);
    }
  };

  return (
    <Modal visible onClose={onClose}>
      {showErrorModal && (
        <Modal
          visible={showErrorModal}
          message="No se encontró la palabra en el diccionario"
          onClose={() => setShowErrorModal(false)}
        />
      )}
      <h3>Traductor USIP</h3>
      <p>Que palabra desea traducir del diccionario.</p>
      <p>Agregue su palabra y despues el idioma de traducción.</p>
      <form onSubmit={handleTranslate}>
        <div>
          <label htmlFor="wordToTranslate">Palabra a traducir:</label>
          <input
            type="text"
            id="wordToTranslate"
            name="wordToTranslate"
            value={wordToTranslate}
            onChange={(e) => setWordToTranslate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="language">Idioma de traducción:</label>
          <select
            id="language"
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Seleccionar idioma</option>
            <option value="Ingles">Inglés</option>
            <option value="Portugues">Portugués</option>
            <option value="Español">Español</option>
          </select>
        </div>
        <div>
          <textarea
            id="translation"
            name="translation"
            value={translation}
            readOnly
            placeholder="Traducción"
          />
        </div>
        <button type="submit">Traducir</button>
      </form>
    </Modal>
  );
};

export default FormTranslate;
