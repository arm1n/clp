import { useEffect, useState, useCallback } from "react";

export const useKeyPress = (key) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const downHandler = useCallback(
    ({ key: currentKey }) => {
      if (key === currentKey) {
        setIsKeyPressed(true);
      }
    },
    [key]
  );

  const upHandler = useCallback(
    ({ key: currentKey }) => {
      if (key === currentKey) {
        setIsKeyPressed(false);
      }
    },
    [key]
  );

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [downHandler, upHandler]);

  return isKeyPressed;
};
