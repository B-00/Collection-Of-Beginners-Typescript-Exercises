export function decodedResistorValue(colors: string[]) {
  enum colorCode {
  'black',   //0
  'brown',   //1
  'red',     //2
  'orange',  //3 
  'yellow',  //4
  'green',   //5
  'blue',    //6
  'violet',  //7
  'grey',    //8
  'white'    //9
  }

  type colorKey = keyof typeof colorCode;

  const [firstColor, secondColor, thirdColor] = colors;
  
  const zeroRepeat = '0'.repeat(parseInt(`${colorCode[thirdColor as colorKey]}`));
  let num = `${colorCode[firstColor as colorKey]}${colorCode[secondColor as colorKey]}${zeroRepeat}`;
  const zeroLength = num.split('0').length - 1;
  const retainZeros = zeroLength % 3;

  let newNum = num.split('0')[0];
  const end: string = zeroLength > 2 ? 'kiloohms' : 'ohms';

  newNum = newNum + '0'.repeat(retainZeros)

  return `${newNum} ${end}`;
}