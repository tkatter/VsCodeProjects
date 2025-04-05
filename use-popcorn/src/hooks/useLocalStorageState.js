import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, keyName) {
  const [value, setValue] = useState(function () {
    // Uses a callback function to set the initial state to the value of watched in localStorage
    const storedValue = localStorage.getItem(keyName);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(keyName, JSON.stringify(value));
    },
    [value, keyName]
  );

  return [value, setValue];
}
