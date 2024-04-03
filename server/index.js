import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
}

app.listen(process.env.PORT, () => {
  console.log('servidor de express funcionado')
})
