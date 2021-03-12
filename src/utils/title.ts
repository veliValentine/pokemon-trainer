export const title = (input: string) => {
  const [firstLetter, ...rest] = input;
  return firstLetter.toUpperCase() + rest.join('').toLowerCase();
}
