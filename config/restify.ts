import * as fs from 'fs'
import * as path from 'path'
import * as restify from 'restify'
import { config } from './env'

// get path to routes handlers
const pathToRoutes: string = path.join(config.root, '/app/routes')

// create Restify serve with the configured name
const app: restify.Server = restify.createServer({name: config.name})

app.use(restify.plugins.bodyParser());

//user-defined middleware
app.use((req: restify.Request, res: restify.Response, next: restify.Next)=>{

    res.setHeader('Access-Control-Allow-Origin', '*')
    
    // disable caching so we'll always get the latest data
    res.setHeader('Cache-Control', 'no-cache');

    return next();
})

// add route handlers
fs.readdir(pathToRoutes, (err: any, files: string[])=>{
    if(err){
        throw new Error(err);
    }
    else{
        files.filter((file: string)=>{
            const route = require(path.join(pathToRoutes, file))
            route.default(app)
        })
    }
})

export { app }
