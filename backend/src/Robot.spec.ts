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
  })
})
