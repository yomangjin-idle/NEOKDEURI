export const setLocalStorage = (id, value) => {
  localStorage.setItem(`${id}`, value);
};

export const getLocalStorage = (id) => {
  const data = localStorage.getItem(id);
  return data;
};
