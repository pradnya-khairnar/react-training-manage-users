import { useState } from "react";

export function useFormState(initialState) {
  const [formState, setFormState] = useState(initialState);

  const setFormValue = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };
  return {
    formState,
    setFormValue,
  };
}
