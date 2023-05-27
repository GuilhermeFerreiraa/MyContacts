import { useState } from 'react';

export default function useErrors() {
  // precisa começar com 'use' para ser um custom hook
  const [errors, setErrors] = useState([]);

  console.log(errors);

  function setError({ field, message }) {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(fieldName) {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return { setError, removeError, getErrorMessageByFieldName };
}
