import { Robot, IPosition } from './Robot'

/* 
    Writing the initial room grids, and starting position of the robot
*/

const grid = {
  x: 5,
  y: 5,
}

const position: IPosition = {
  x: 3,
  y: 3,
  direction: 'N',
}

/* 

    I demonstrate to go for the following unit tests, but there can be many more.
    According to my knowledge of the logic, these tests should be enough to approve the robot logic successfull.

*/

describe('Running all the possible robot tests', () => {
  /* 
    Testing robot that is facing North, and command it rotate right until it returns back to North
   */

  test('From N rotate to right, 360°', () => {
    const robot = new Robot({ grid, position })

    expect(robot.toString()).toBe('3 3 N')

    robot.runCommand('R')

    expect(robot.toString()).toBe('3 3 E')

    robot.runCommand('R')

    expect(robot.toString()).toBe('3 3 S')

    robot.runCommand('R')

    expect(robot.toString()).toBe('3 3 W')

    robot.runCommand('R')

    expect(robot.toString()).toBe('3 3 N')
  })

  /* 
    Now, testing robot that is facing North, and command it rotate left until it returns back to North
   
    */

  test('From N rotate to left, 360°', () => {
    const robot = new Robot({ grid, position })

    expect(robot.toString()).toBe('3 3 N')

    robot.runCommand('L')

    expect(robot.toString()).toBe('3 3 W')

    robot.runCommand('L')

    expect(robot.toString()).toBe('3 3 S')

    robot.runCommand('L')

    expect(robot.toString()).toBe('3 3 E')

    robot.runCommand('L')

    expect(robot.toString()).toBe('3 3 N')
  })

  /* 
    Now, testing robot that is facing North, and command it move forward and 
    rotate right until it comes to same grids but with facing West
   
    */

  test('From N, move one step forward with rotating right, 360°', () => {
    const robot = new Robot({ grid, position })

    expect(robot.toString()).toBe('3 3 N')

    robot.runCommand('F')

    expect(robot.toString()).toBe('3 2 N')

    robot.runCommand('R')

    robot.runCommand('F')

    expect(robot.toString()).toBe('4 2 E')

    robot.runCommand('R')
    robot.runCommand('F')

    expect(robot.toString()).toBe('4 3 S')

    robot.runCommand('R')
    robot.runCommand('F')

    expect(robot.toString()).toBe('3 3 W')

    robot.runCommand('R')

    expect(robot.toString()).toBe('3 3 N')
  })

  /* 
    Now, testing robot that is facing North, and command it move forward and 
    rotate left until it comes to same grids but with facing East
   
    */

  test('From N, move one step forward with rotating left, 360°', () => {
    const robot = new Robot({ grid, position })

    expect(robot.toString()).toBe('3 3 N')

    robot.runCommand('F')

    expect(robot.toString()).toBe('3 2 N')

    robot.runCommand('L')

    robot.runCommand('F')

    expect(robot.toString()).toBe('2 2 W')

    robot.runCommand('L')
    robot.runCommand('F')

    expect(robot.toString()).toBe('2 3 S')

    robot.runCommand('L')
    robot.runCommand('F')

    expect(robot.toString()).toBe('3 3 E')

    robot.runCommand('L')

    expect(robot.toString()).toBe('3 3 N')
  })

  /* 
    Testing robot with invalid commands, should return Throw

  */

  test('Testing robot invalid commands', () => {
    const robot = new Robot({ grid, position })

    expect(() => robot.runCommands('KASD')).toThrow()
  })

  /* 
  
    Testing robots' constructor with wrong initialPosition arguments
    that is out of the grid ranges, room wide and depth, should return Throw

  */
  test('Testing invalid constructor arguments', () => {
    const position: IPosition = {
      x: 100,
      y: 100,
      direction: 'E',
    }

    expect(() => new Robot({ grid, position })).toThrow()
  })

  /* 
    Moving robot forward to the edge of the grid, 
    with a try to step one more move forward, 
    it should return not valid because it can not move beyod the grid values
  
    */
  test('Testing robot to move forward after the edge ends', () => {
    const robot = new Robot({ grid, position })

    let isValid = robot.runCommands('FFFF')

    expect(isValid).toBe(false)

    isValid = robot.runCommands('RRFFFFFF')

    expect(isValid).toBe(false)

    isValid = robot.runCommands('RRFFRFFFF')

    expect(isValid).toBe(false)

    isValid = robot.runCommands('RRFFFFFF')

    expect(isValid).toBe(false)
  })

  /* 
    Test 1: testing robot to give us report similar to jaway. devo instructions
  
    */
  test('Testing with commands RFRFFRFRF', () => {
    const grid = {
      x: 5,
      y: 5,
    }
    const position: IPosition = {
      x: 1,
      y: 2,
      direction: 'N',
    }

    const robot = new Robot({ grid, position })

    let isValid = robot.runCommands('RFRFFRFRF')

    expect(isValid).toBe(true)

    expect(robot.toString()).toBe('1 3 N')
  })

  /* 
    Test 2: testing robot to give us report similar to jaway. devo instructions
  
    */
  test('Testing with commands RFLFFLRF', () => {
    const grid = {
      x: 5,
      y: 5,
    }
    const position: IPosition = {
      x: 0,
      y: 0,
      direction: 'E',
    }

    const robot = new Robot({ grid, position })

    let isValid = robot.runCommands('RFLFFLRF')

    expect(isValid).toBe(true)

    expect(robot.toString()).toBe('3 1 E')
  })
})
