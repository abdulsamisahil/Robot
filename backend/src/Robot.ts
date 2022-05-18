type Direction = 'N' | 'S' | 'E' | 'W'

type Command = 'L' | 'R' | 'F'

interface IDimension {
  x: number
  y: number
}

export interface IPosition extends IDimension {
  direction: Direction
}

interface IRobotConfig {
  position: IPosition
  grid: IDimension
}

interface IDirectionMap {
  left: Direction
  right: Direction
}

export class Robot {
  private readonly directionMap: Record<Direction, IDirectionMap> = {
    N: {
      left: 'W',
      right: 'E',
    },
    S: {
      left: 'E',
      right: 'W',
    },
    E: {
      left: 'N',
      right: 'S',
    },
    W: {
      left: 'S',
      right: 'N',
    },
  }

  constructor(private config: IRobotConfig) {
    if (!this.isPositionValid(config.position)) {
      throw new Error('The start position must be inside the grid')
    }
  }

  private getRelativeDirection(): IDirectionMap {
    return this.directionMap[this.config.position.direction]
  }

  private left(): void {
    this.config.position.direction = this.getRelativeDirection().left
  }

  private right(): void {
    this.config.position.direction = this.getRelativeDirection().right
  }

  private getRelativePosition(): IDimension {
    const { x, y } = this.config.position

    const newPosition: IDimension = { x, y }

    if (this.config.position.direction === 'N') newPosition.y--

    if (this.config.position.direction === 'S') newPosition.y++

    if (this.config.position.direction === 'W') newPosition.x--

    if (this.config.position.direction === 'E') newPosition.x++

    return newPosition
  }

  private isPositionValid(newPosition: IDimension): boolean {
    const grid = this.config.grid

    return (
      newPosition.x >= 1 &&
      newPosition.y >= 1 &&
      newPosition.x <= grid.x &&
      newPosition.y <= grid.y
    )
  }

  /**
   *
   * @returns false if the robot wants to go out of the grid
   */
  private forward(): boolean {
    const newPosition = this.getRelativePosition()

    const isValid = this.isPositionValid(newPosition)

    if (isValid) {
      this.config.position = {
        ...this.config.position,
        ...newPosition,
      }
    }

    return isValid
  }

  getPosition(): IPosition {
    return this.config.position
  }

  runCommand(command: Command): boolean {
    if (command === 'L') this.left()

    if (command === 'R') this.right()

    let isValid = true

    if (command === 'F') {
      isValid = this.forward()
    }
    return isValid
  }

  /*  Type guard */
  private isCommandValid(command: string): command is Command {
    return command === 'L' || command === 'R' || command === 'F'
  }

  runCommands(commands: string | Command[]): boolean {
    if (Array.isArray(commands)) {
      commands = commands.join('')
    }

    for (const command of commands) {
      if (!this.isCommandValid(command)) {
        throw new Error(
          `${command} is not a valid command, valid commands are L, R, and F`
        )
      }
    }

    let isMoveValid = true

    for (const command of commands) {
      isMoveValid = this.runCommand(command as Command)
    }

    return isMoveValid
  }

  toString(): string {
    const { x, y, direction } = this.getPosition()

    return `${x}, ${y}, ${direction}`
  }
}
