import Products2 from './models/productModel.js'
import Order2 from './models/orderModel.js'
import User2 from './models/userModel.js'
import dotenv from 'dotenv'
import mongoDB from './dbMongo.js'
import mongoose from 'mongoose'
import users from './data/users.js'
import products from './data/products.js'

dotenv.config()

mongoDB()

const importData = async () => {
  try {
    await Order2.deleteMany()
    await User2.deleteMany()
    await Products2.deleteMany()

    const createdUsers = await User2.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })
    await Products2.insertMany(sampleProducts)
    console.log(`Data Imported`)
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order2.deleteMany()
    await User2.deleteMany()
    await Products2.deleteMany()

    console.log(`Data Destroyed`)
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === 'd') {
  destroyData()
} else {
  importData()
}
