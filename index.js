// import mongoose from 'mongoose'
// import express from 'express'
// import morgan from 'morgan'

// import { dirname } from 'path'
// import { fileURLToPath } from 'url'

// import tasksRouter from './src/routes/tasks.js'

// mongoose.set('strictQuery', true)
// mongoose
// .connect(
//   'mongodb+srv://rm4xn:D2ieJqmvSjwx2J0x@mevn-database.syx39d2.mongodb.net/test'
//   )
//   .then((db) => console.log('Database is connected.'))
//   .catch((err) => console.log(err))
  
// const app = express()

// // Settings
// app.set('port', process.env.PORT || 3000)

// // Middlewares
// app.use(morgan('dev'))
// app.use(express.json())

// // Routes
// app.use('/api/tasks', tasksRouter)

// // Static files
// app.use(express.static(dirname(fileURLToPath(import.meta.url)) + '/dist'))

// app.listen(app.get('port'))

console.log('hola desde el index')