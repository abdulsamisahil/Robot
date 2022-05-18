import express, { Request, Response } from 'express'

import { json } from 'body-parser'

import { Robot } from './Robot'

import { body, validationResult } from 'express-validator'

const app = express()

app.use(json())

app.post(
  '/robot',
  isPositionValid('position'),
  body('position.direction').isIn(['N', 'S', 'E', 'W']),
  isPositionValid('grid'),
  body('commands').isString(),
  (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { position, grid, commands } = req.body

    const robot = new Robot({ grid, position })

    robot.runCommands(commands)

    res.json({ Report: robot.toString() })
  }
)

function isPositionValid(field: string) {
  return [
    body(field).isObject(),
    body(`${field}.x`).isNumeric().toInt(),
    body(`${field}.y`).isNumeric().toInt(),
  ]
}

app.listen(3000, () => console.log('Server listening on port 3000...'))
