const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const port = process.env.PORT || 3000;

let db,
  dbConnectionString = process.env.DB_STRING,
  dbName = 'sample_airbnb',
  collection

MongoClient.connect(dbConnectionString)
  .then(client => {
    console.log('Connected to Database')
    db = client.db(dbName)
    collection =db.collection('listingsAndReviews')
  })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send(process.env.SECRET_KEY);
})
  try {
    response.render('index.ejs')
  } catch (error) {
    response.status(500).send({message:error.message})
  }
})



app.listen(port, () => {
  console.log('Server is running on port ${port}.')
})
