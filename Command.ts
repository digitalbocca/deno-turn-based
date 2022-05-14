import ExecutableCommandInterface from './ExecutableCommandInterface.ts'

export default abstract class Command implements ExecutableCommandInterface {
  protected command: string

  protected constructor(command: string) {
    this.command = command
  }

  public abstract execute(): void
}
