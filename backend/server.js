import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import mongoDB from './dbMongo.js'
import mongoRouter from './router.js'
import { errorHandler, notFound } from './models/middleware/errorMiddleware.js'

dotenv.config()

mongoDB()

const app = express()

app.get('', (req, res) => {
  res.json('api is running....')
})

app.use('/api/products', mongoRouter)

app.use(notFound)

app.use(errorHandler)

app.listen(5001, console.log('Server started on port 5001'))
