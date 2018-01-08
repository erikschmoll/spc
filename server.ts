import { config } from './config/env'
import { app } from './config/restify'


//connect to mongodb


app.listen(config.port,()=>{
    console.log(`${config.name} is running at ${app.url}`)
})
