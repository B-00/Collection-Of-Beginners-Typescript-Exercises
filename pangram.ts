export function isPangram(str: string): boolean {
  str = str.toLowerCase()

  const letterArray = new Array(26).fill(0);

  for (const letter of str) {
    if (letter.charCodeAt(0) - 97 >= 0 && letter.charCodeAt(0) - 97 <= 25) {
      if (letterArray[letter.charCodeAt(0) - 97] === 0) {
          letterArray[letter.charCodeAt(0) - 97] = 1;
      }
    }
  }
  
  return letterArray.every(val => val === 1);
}