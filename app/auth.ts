import * as restify from 'restify'
import * as assert from 'assert'
import * as auth0 from 'jsonwebtoken'
import { config } from '../config/env'


const requireAdmin = (req: restify.Request, res: restify.Response, next: restify.Next) =>{
    var token:string | string[] = req.headers.authorization;
    auth0.verify(token.toString(), config.auth.tokenSecret, (error:any, decoded :any)=>{
        return next(error)
    })
}

export { requireAdmin }
