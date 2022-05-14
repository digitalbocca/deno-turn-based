import Dependency from './Dependency.ts'

export default class Container {
  private dependencies: Dependency[]
  private aliases: Map<string, string>

  public constructor() {
    this.dependencies = []
    this.aliases = new Map()
  }

  public add(dependency: Dependency): void {
    this.dependencies.push(dependency)
  }

  public registerAlias(aliases: string[], name: string): void {
    for (const alias of aliases) {
      this.aliases.set(alias, name)
    }
  }

  public find(name: string): void {
    if (this.aliases.has(name)) {
      name = this.aliases.get(name) || ''
    }

    if (this.dependencies?.find(dep => dep.getName() === name)) {
      this.dependencies?.find(dep => dep.getName() === name)?.getInstance()?.execute()
    } else {
      console.error(`Dependency ${name} not found`)
    }
  }
}