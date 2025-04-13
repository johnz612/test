export function generateAlphabetWithCapital() {
  const alphabet = [];
  for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  return alphabet;
}

console.log(generateAlphabetWithCapital());
