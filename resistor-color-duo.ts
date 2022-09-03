export function decodedValue(colors: string[]): number {
  enum colorCode {
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
  }
  
  let [firstColor, secondColor] = colors;
  type colorKey = keyof typeof colorCode;

  return parseInt(`${colorCode[firstColor as colorKey]}${colorCode[secondColor as colorKey]}`);
}