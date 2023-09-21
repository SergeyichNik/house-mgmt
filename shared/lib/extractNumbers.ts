export function extractNumbersFromString(inputString: string): string {
  const regex = /\d+/g;
  const matches = inputString.match(regex);

  if (matches) {
    return matches.join("");
  } else {
    return "";
  }
}
