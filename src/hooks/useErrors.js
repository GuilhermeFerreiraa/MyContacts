import { useCallback, useState } from 'react';

export default function useErrors() {
  // precisa começar com 'use' para ser um custom hook
  const [errors, setErrors] = useState([]);

  // console.log(errors);

  const setError = useCallback(
    ({ field, message }) => {
      const errorAlreadyExists = errors.find((error) => error.field === field);

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevState) => [...prevState, { field, message }]);
    },
    [errors],
  );

  const removeError = useCallback((fieldName) => {
    setErrors((prevState) => prevState.filter((error) => error.field !== fieldName));
  }, []);

  const getErrorMessageByFieldName = useCallback(
    (fieldName) => errors.find((error) => error.field === fieldName)?.message,
    [errors],
  );

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
