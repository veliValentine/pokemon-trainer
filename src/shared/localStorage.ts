import { PokemonBase } from "./interface";

const KEY_VALUE: string = 'pokemon-trainer-experis'

type StorageValue = string | PokemonBase[]

export const setStorage = (key: string, value: StorageValue): void => {
  const encrypted: string = btoa(JSON.stringify(value));
  localStorage.setItem(`${KEY_VALUE}:${key}`, encrypted);
}

export const getStorage = (key: string): any => {
  const storedValue: string = localStorage.getItem(`${KEY_VALUE}:${key}`);
  if (!storedValue) return false;
  return JSON.parse(atob(storedValue));
};

export const removeStorage = (key: string): void => {
  localStorage.removeItem(`${KEY_VALUE}:${key}`)
}

export const clearStorage = (): void => {
  localStorage.clear();
};
