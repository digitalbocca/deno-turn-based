import ClearablePersistanceInterface from "./ClearablePersistanceInterface.ts";

export default class Player implements ClearablePersistanceInterface {
  private name: string;
  private email: string;
  private tokens: number;
  // private inventory: Item[];
  private round: number;

  public constructor () {
    this.name = '';
    this.email = '';
    this.tokens = 0;
    // this.inventory = [];
    this.round = 0;
    this.checkPersistence();
  }

  private checkPersistence () {
    if (localStorage.getItem('player')) {
      const player = JSON.parse(localStorage.getItem('player') || '');
      this.name = player.name;
      this.email = player.email;
      this.tokens = player.tokens;
      // this.inventory = player.inventory;
      this.round = player.round;
    } else {
      this.createPersistence()
    }
  }

  private createPersistence () {
    localStorage.setItem('player', JSON.stringify({
      name: prompt('What is your name?') || '',
      email: prompt('What is your email?') || '',
      tokens: 1000,
      // inventory: [],
      round: 0
    }));
    this.checkPersistence()
  }

  public clearPlayerData () {
    localStorage.removeItem('player');
    this.checkPersistence();
  }

  public getPlayer () {
    return {
      name: this.name,
      email: this.email,
      tokens: this.tokens,
      // inventory: this.inventory,
      round: this.round
    }
  }

  public getName () {
    return this.name
  }

  public getEmail () {
    return this.email
  }

  public getTokens () {
    return this.tokens
  }

  public getRound () {
    return this.round
  }

}