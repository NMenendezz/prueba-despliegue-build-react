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

let port = process.env.PORT;
if (port == null || port == "") {
port = 3000;
}

app.listen(port, () => {
  console.log('servidor de express funcionado')
})
