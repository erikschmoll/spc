import * as restify from 'restify'
import * as assert from 'assert'


const requireAdmin = (req: restify.Request, res: restify.Response, next: restify.Next) =>{
    //res.send(401)
    //assert.equal(null, 1)
    //return next(false);
    return next();
}

export { requireAdmin }
