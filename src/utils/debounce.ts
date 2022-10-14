let timer: number;

/**
 * Debounces a function given an interval
 * @param cb Callback to debounce on
 * @param timeout Interval you want to debounce
 */
const debounce = (cb: () => void, timeout: number) => {
  window.clearTimeout(timer);
  timer = window.setTimeout(cb, timeout);
};

export default debounce;
