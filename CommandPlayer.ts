import Command from './Command.ts'
import Player from './Player.ts'

export default class Help extends Command {
  private player: Player;


  public constructor (player: Player) {
    super('player')
    this.player = player
  }

  public execute(): void {
    console.clear()
    console.table(this.player.getPlayer())
  }
}
