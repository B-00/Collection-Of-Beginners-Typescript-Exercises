export function age(planet: string, seconds: number): number {
  switch(planet) {
    case 'earth':
      return +(seconds / 31557600).toFixed(2);
    case 'mercury':
      return +(seconds / 7_600_543.81992).toFixed(2);
    case 'venus':
      return +(seconds / 19_414_149.052176).toFixed(2);
    case 'mars':
      return +(seconds / 59_354_032.69008).toFixed(2);
    case 'jupiter':
      return +(seconds / 374_355_659.124).toFixed(2);
    case 'saturn':
      return +(seconds / 929_292_362.8848).toFixed(2);
    case 'uranus':
      return +(seconds / 2_651_370_019.3296).toFixed(2);
    case 'neptune':
      return +(seconds / 5_200_418_560.032).toFixed(2);
    default: 
      return 0;
  }
}