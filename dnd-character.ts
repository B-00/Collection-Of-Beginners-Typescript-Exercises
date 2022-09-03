export class DnDCharacter {
  strength: number = DnDCharacter.generateAbilityScore();
  dexterity: number = DnDCharacter.generateAbilityScore();
  constitution: number = DnDCharacter.generateAbilityScore();
  intelligence: number = DnDCharacter.generateAbilityScore();
  wisdom: number = DnDCharacter.generateAbilityScore();
  charisma: number = DnDCharacter.generateAbilityScore();

  hitpoints: number = 10 + Math.floor((this.constitution - 10) / 2);

  public static generateAbilityScore(): number {
    return Math.round(Math.random() * (18 - 3) + 3);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}