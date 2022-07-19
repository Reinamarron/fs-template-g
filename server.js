const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = 8000

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

app.set