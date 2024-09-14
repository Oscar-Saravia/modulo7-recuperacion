import { useDispatch } from "react-redux";
import { setDictionary } from "../../../redux/dictionary/dictionaryActions";
import useForm from "../../../hooks/useForm";

const FormDictionary = ({ onClose }) => {
  const [values, handleChange] = useForm({
    spanish: "",
    english: "",
    portuguese: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setDictionary(values));
    onClose();
  };

  return (
    <>
      <h3>Traductor USIP</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="spanish">Español:</label>
          <input
            type="text"
            id="spanish"
            name="spanish"
            value={values.spanish}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="english">Inglés:</label>
          <input
            type="text"
            id="english"
            name="english"
            value={values.english}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="portuguese">Portugués:</label>
          <input
            type="text"
            id="portuguese"
            name="portuguese"
            value={values.portuguese}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit">AGREGAR</button>
        </div>
      </form>
    </>
  );
};

export default FormDictionary;
