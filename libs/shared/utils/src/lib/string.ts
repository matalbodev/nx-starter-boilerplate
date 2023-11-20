export function removeAccents(str: string) {
  // Normalize the string to decomposed Unicode (NFD)
  const normalizedStr = str.normalize('NFD');

  // Use a regular expression to match accented characters and replace them with the base character
  const withoutAccents = normalizedStr.replace(/[\u0300-\u036f]/g, '');

  return withoutAccents;
}
