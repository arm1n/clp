import React, { forwardRef, useRef, useState, useEffect, useCallback } from "react";

import { useMounted } from "hooks";

import styles from "./search.module.scss";

/**
 * Simple search box with clear button.
 *
 * Usage:
 *
 * <Search {...props} />
 */
export const Search = forwardRef(({ value, focus, placeholder, onInput, onChange }, ref) => {
  const [currentValue, setCurrentValue] = useState(value);
  const inputRef = useRef(ref);

  const inputHandler = useCallback(
    (event) => {
      const {
        target: { value },
      } = event;
      setCurrentValue(value);
      onInput(value);
    },
    [onInput]
  );

  const changeHandler = useCallback(
    (event) => {
      const {
        target: { value },
      } = event;
      setCurrentValue(value);
      onChange(value);
    },
    [onChange]
  );

  const clearHandler = useCallback(() => {
    setCurrentValue("");
    onChange("");
    onInput("");
  }, [onChange, onInput]);

  useEffect(() => {
    focus && inputRef.current.focus();
  }, [focus, inputRef]);

  useMounted(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        ref={inputRef}
        value={currentValue}
        onInput={inputHandler}
        onChange={changeHandler}
        className={styles.input}
        placeholder={placeholder}
      />
      {currentValue && <button type="button" onClick={clearHandler} className={styles.clear} />}
    </div>
  );
});

Search.defaultProps = {
  value: "",
  autoFocus: false,
  onInput: () => {},
  onChange: () => {},
  placeholder: "Search...",
};
