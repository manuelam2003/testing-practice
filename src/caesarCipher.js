const isLetter = (char) => /^[a-zA-Z]$/.test(char);
const shiftLetter = (char, shift) => {
  const code = char.charCodeAt(0);
  const lastCode = /^[A-Z]$/.test(char) ? 90 : 122;
  const modShift = shift % 26;
  return String.fromCharCode(
    code + modShift <= lastCode
      ? code + modShift
      : ((code + modShift) % lastCode) + (lastCode - 26)
  );
};

const caesarCipher = (string, shiftFactor) =>
  string
    .split("")
    .map((char) => {
      if (isLetter(char)) {
        return shiftLetter(char, shiftFactor);
      }
      return char;
    })
    .join("");

export default caesarCipher;
