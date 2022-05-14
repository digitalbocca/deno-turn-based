import Container from './Container.ts'
import Dependency from './Dependency.ts'

import Exit from './CommandExit.ts'
import Clear from './CommandClear.ts'
import Help from './CommandHelp.ts'
import CPlayer from './CommandPlayer.ts'

import Player from './Player.ts'

const player = new Player()

const container = new Container()
container.add(new Dependency('exit', new Exit()))
container.add(new Dependency('clear', new Clear()))
container.add(new Dependency('help', new Help()))
container.add(new Dependency('player', new CPlayer(player)))

container.registerAlias(['q', 'sair', 'quit'], 'exit')
container.registerAlias(['clean', 'cls', 'limpar'], 'clear')
container.registerAlias(['h', 'ajuda' ], 'help')
container.registerAlias(['p', 'jogador'], 'player')

const main = async () => {
  const prompt = async () => await window.prompt('Enter command:') || ''
  container.find(await prompt())
  main()
}

main()
