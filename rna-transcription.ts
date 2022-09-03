export function toRna(DNA: string) {
  const DNAArray = ['C', 'G', 'A', 'T'];
  let newLetter:string = '';
  let RNA:string = '';
  for (const letter of DNA) {
    if (DNAArray.indexOf(letter) === -1) {
      throw new Error('Invalid input DNA.');
    } else {
      switch(letter) {
        case 'C':
          newLetter = 'G';
          break;
        case 'G':
          newLetter = 'C';
          break;
        case 'A':
          newLetter = 'U';
          break;
        case 'T':
          newLetter = 'A';
          break;
      }
      RNA += newLetter;
    }
  }
  return RNA;
}