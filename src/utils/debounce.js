export const debounce = (fn, delay) => {
  let id;
  return (...args) => {
    console.log(args);
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
