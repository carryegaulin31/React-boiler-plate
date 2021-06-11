import express from 'express'
// import bodyParser from 'body-parser'
import path from 'path'
// import { getAllNsns } from './controllers/nsn'

const app = express()

app.use(express.static('public'))

app.get('/ap')

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337...')
})
