export function debounce(callback, wait = 300, immediate = false) {
  let timeout = null;

  return (...args) => {
    const callNow = immediate && !timeout;
    const next = () => callback(...args);

    clearTimeout(timeout);
    timeout = setTimeout(next, wait);

    if (callNow) {
      next();
    }
  };
}
