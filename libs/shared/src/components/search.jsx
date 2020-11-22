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
  const [valueInternal, setValueInternal] = useState(value);
  const inputRef = useRef(ref);

  const inputHandler = useCallback(
    (event) => {
      const {
        target: { value },
      } = event;
      setValueInternal(value);
      onInput(value);
    },
    [onInput]
  );

  const changeHandler = useCallback(
    (event) => {
      const {
        target: { value },
      } = event;
      setValueInternal(value);
      onChange(value);
    },
    [onChange]
  );

  const clearHandler = useCallback(() => {
    setValueInternal("");
    onChange("");
    onInput("");
  }, [onChange, onInput]);

  useEffect(() => {
    focus && inputRef.current.focus();
  }, [focus, inputRef]);

  useMounted(() => {
    setValueInternal(value);
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        ref={inputRef}
        value={valueInternal}
        onInput={inputHandler}
        onChange={changeHandler}
        className={styles.input}
        placeholder={placeholder}
      />
      {valueInternal && <button type="button" onClick={clearHandler} className={styles.clear} />}
    </div>
  );
});

Search.defaultProps = {
  value: "",
  focus: false,
  onInput: () => {},
  onChange: () => {},
  placeholder: "Search...",
};
