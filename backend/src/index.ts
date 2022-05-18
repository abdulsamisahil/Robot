import express, { Request, Response } from 'express'

const app = express()

app.post('/robot', (req: Request, res: Response) => {
  res.json({ message: 'server reponse' })
})

app.listen(3000, () => console.log('Server listening on port 3000...'))
