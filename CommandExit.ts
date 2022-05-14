import Command from './Command.ts'

export default class Exit extends Command {
  public constructor () {
    super('exit')
  }

  public execute(): void {
    console.log('Bye!')
    Deno.exit()
  }
}