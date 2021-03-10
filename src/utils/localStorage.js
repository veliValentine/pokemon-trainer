const KEY_VALUE = 'pokemon-trainer-experis'

export const setStorage = (key, value) => {
  const encrypted = btoa(JSON.stringify(value));
  localStorage.setItem(`${KEY_VALUE}:${key}`, encrypted);
}

export const getStorage = (key) => {
  const storedValue = localStorage.getItem(`${KEY_VALUE}:${key}`);
  if (!storedValue) return false;
  return JSON.parse(atob(storedValue));
};

export const removeStorage = (key) => {
  localStorage.removeItem(`${KEY_VALUE}:${key}`)
}

export const clearStorage = () => {
  localStorage.clear();
};