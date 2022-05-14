import ExecutableCommandInterface from './ExecutableCommandInterface.ts'

export default class Dependency {
  private name: string
  private instance: ExecutableCommandInterface

  public constructor(name: string, instance: ExecutableCommandInterface) {
    this.name = name
    this.instance = instance
  }

  public getName(): string {
    return this.name
  }

  public getInstance(): ExecutableCommandInterface {
    return this.instance
  }
}
