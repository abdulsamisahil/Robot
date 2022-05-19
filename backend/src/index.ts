import express from 'express'

import { json } from 'body-parser'

const app = express()

const route = require('../routes/routes')

app.use(json())

app.use('/robot', route)

app.listen(5000, () => console.log('Server listening on port 5000...'))
