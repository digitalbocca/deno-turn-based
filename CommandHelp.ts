import Command from './Command.ts'

export default class Help extends Command {
  public constructor () {
    super('help')
  }

  public execute(): void {
    console.log('Você está usando o comando help')
  }
}