import express, { Request, Response } from 'express'

import { json } from 'body-parser'

import { Robot } from './Robot'

const app = express()

app.use(json())

app.post('/robot', (req: Request, res: Response) => {
  const { position, grid } = req.body

  const robot = new Robot({ grid, position })

  res.json(robot.toString())
})

app.listen(3000, () => console.log('Server listening on port 3000...'))
