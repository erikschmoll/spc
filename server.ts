import { config } from './config/env'
import { app } from './config/restify'
import { MongoClient } from 'mongodb'


//connect to mongodb

//var uri = "mongodb://spc:sofrecom10!@cluster0-shard-00-00-uyim5.mongodb.net:27017/dev";
var uri = "mongodb://spc:sofrecom10!@cluster0-shard-00-00-uyim5.mongodb.net:27017,cluster0-shard-00-01-uyim5.mongodb.net:27017,cluster0-shard-00-02-uyim5.mongodb.net:27017/dev";

MongoClient.connect(uri, function(err, db) {
  db.close();
});



app.listen(config.port,()=>{
    console.log(`${config.name} is running at ${app.url}`)
})
