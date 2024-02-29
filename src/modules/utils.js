export const setLocalStorage = (id, value) => {
  // 데이터 저장
  localStorage.setItem(`${id}`, value);
};

export const getLocalStorage = (id) => {
  const data = localStorage.getItem(id);
  return data;
};
