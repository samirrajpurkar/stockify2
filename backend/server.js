import express from 'express'
import cors from 'cors'
import mongodb from 'mongodb'

const app = express()

app.use(cors())


const dbURL = 'mongodb://localhost/stockify2'

mongodb.MongoClient.connect(dbURL, (errorconnect, db) => {
  app.get('/api/investments', (req, res) => {
    db.collection('investments')
      .find({})
      .toArray((errorfind, investments) => { res.json({ investments }) })
  })

  app.listen(8080, () => {
    console.log('Sever running on http://localhost:8080/')
  })
})
