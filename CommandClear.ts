import Command from './Command.ts'

export default class Clear extends Command {
  public constructor () {
    super('clear')
  }

  public execute(): void {
    console.clear()
  }
}
