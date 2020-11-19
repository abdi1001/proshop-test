import express from 'express'
import Products2 from './models/productModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Products2.find({})
    res.json(products)
  })
)

router.get('/:id', async (req, res) => {
  const product = await Products2.findById(req.params.id)
  res.json(product)
})

export default router
