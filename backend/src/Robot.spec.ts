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

  test('From N rotate to right', () => {
    const robot = new Robot({ grid, position })

    expect(robot.toString()).toBe('3, 3, N')

    robot.runCommand('R')

    expect(robot.toString()).toBe('3, 3, E')

    robot.runCommand('R')

    expect(robot.toString()).toBe('3, 3, S')

    robot.runCommand('R')

    expect(robot.toString()).toBe('3, 3, W')

    robot.runCommand('R')

    expect(robot.toString()).toBe('3, 3, N')
  })

  /* 
    Now, testing robot that is facing North, and command it rotate left until it returns back to North
   
    */

  test('From N rotate to left', () => {
    const robot = new Robot({ grid, position })

    expect(robot.toString()).toBe('3, 3, N')

    robot.runCommand('L')

    expect(robot.toString()).toBe('3, 3, W')

    robot.runCommand('L')

    expect(robot.toString()).toBe('3, 3, S')

    robot.runCommand('L')

    expect(robot.toString()).toBe('3, 3, E')

    robot.runCommand('L')

    expect(robot.toString()).toBe('3, 3, N')
  })

  /* 
    Now, testing robot that is facing North, and command it move forward and 
    rotate right until it comes to same grids but with facing West
   
    */

  test('From N move forward with rotating right', () => {
    const robot = new Robot({ grid, position })

    expect(robot.toString()).toBe('3, 3, N')

    robot.runCommand('F')

    expect(robot.toString()).toBe('3, 2, N')

    robot.runCommand('R')

    robot.runCommand('F')

    expect(robot.toString()).toBe('4, 2, E')

    robot.runCommand('R')
    robot.runCommand('F')

    expect(robot.toString()).toBe('4, 3, S')

    robot.runCommand('R')
    robot.runCommand('F')

    expect(robot.toString()).toBe('3, 3, W')
  })

  /* 
    Now, testing robot that is facing North, and command it move forward and 
    rotate left until it comes to same grids but with facing East
   
    */

  test('From N move forward with rotating left', () => {
    const robot = new Robot({ grid, position })

    expect(robot.toString()).toBe('3, 3, N')

    robot.runCommand('F')

    expect(robot.toString()).toBe('3, 2, N')

    robot.runCommand('L')

    robot.runCommand('F')

    expect(robot.toString()).toBe('2, 2, W')

    robot.runCommand('L')
    robot.runCommand('F')

    expect(robot.toString()).toBe('2, 3, S')

    robot.runCommand('L')
    robot.runCommand('F')

    expect(robot.toString()).toBe('3, 3, E')
  })
})
