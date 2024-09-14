import { DELETE_WORD, SET_DICTIONARY } from "./dictionaryTypes";

export const setDictionary = (dictionary) => {
  return {
    type: SET_DICTIONARY,
    payload: dictionary,
  };
};

export const deleteWord = (word) => {
  return {
    type: DELETE_WORD,
    payload: word,
  };
};
