import mongoose from 'mongoose'

const mongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`connected to MongoDB: ${conn.connection.host}`)
  } catch (error) {
    console.log('error connection to MongoDB:', error.message)
  }
}

export default mongoDB
