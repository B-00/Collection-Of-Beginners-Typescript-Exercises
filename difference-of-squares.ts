export class Squares {
  private num: number;
  private _squareOfSums: number;
  private _sumOfSquares: number;
  
  constructor(count: number) {
    this.num = count;
    this._squareOfSums = this.squareOfSum;
    this._sumOfSquares = this.sumOfSquares;
  }
  
  get squareOfSum(): number {
    let result = 0;
    for (let i = 1; i <= this.num; i++) {
      result += i;
    }
    return Math.pow(result, 2); 
  }
  
  get sumOfSquares(): number {
    let result = 0;
    for (let i = 1; i <= this.num; i++) {
      result += Math.pow(i, 2);
    }
    return result;
  }

  get difference(): number {
    return this._squareOfSums - this._sumOfSquares;
  }
}