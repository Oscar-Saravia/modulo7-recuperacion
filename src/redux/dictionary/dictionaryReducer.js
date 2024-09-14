import { DELETE_WORD, SET_DICTIONARY } from "./dictionaryTypes";

const initialState = {
  DICTIONARY: [],
};

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DICTIONARY: {
      return {
        ...state,
        DICTIONARY: [...state.DICTIONARY, action.payload],
      };
    }
    case DELETE_WORD: {
      const updatedDictionary = state.DICTIONARY.filter((entry) => {
        return (
          entry.spanish.toLowerCase() !== action.payload.toLowerCase() &&
          entry.english.toLowerCase() !== action.payload.toLowerCase() &&
          entry.portuguese.toLowerCase() !== action.payload.toLowerCase()
        );
      });

      return {
        ...state,
        DICTIONARY: updatedDictionary,
      };
    }

    default:
      return state;
  }
};

export default dictionaryReducer;
