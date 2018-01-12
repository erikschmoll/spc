import { config } from './config/env'
import { app } from './config/restify'
import { MongoClient } from 'mongodb'
import * as assert from 'assert'
import { LoginController } from './app/controllers/login.controller'


//connect to mongodb
MongoClient.connect(config.connectionString, function(err, db) {
  assert.equal(null, err)
  console.log("Connected correctly to server");
  app.listen(config.port,()=>{
    console.log(`${config.name} is running at ${app.url}`)
  })
  db.close();
});




