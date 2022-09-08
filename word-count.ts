export function count(input: string): Map<string, number> {
  //const str = input.replaceAll(/\n|\t/g, ' ').toLowerCase().split(' ');
  const str = input.replace(/\n|\t/g, ' ').toLowerCase().split(' ');

  const mapObj = new Map();

  for (const word of str) {
    if (word !== '') {
      if (mapObj.has(word)) {
        mapObj.set(word, mapObj.get(word) + 1);
      } else {     
        mapObj.set(word, 1);
      }
    }
    
  }

  return mapObj;
}