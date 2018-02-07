import * as restify from 'restify'
import { ADService } from '../services/ad.service'
import { IAuth } from '../contracts/auth.interface'
import { Auth } from '../services/auth.service'
import { InvalidCredentialsError } from 'restify-errors'

interface ILoginController{
    token(req: restify.Request, res: restify.Response, next: restify.Next):any;
}

class LoginController implements ILoginController{
    tokenServ: Auth
    constructor(){
        this.tokenServ = new Auth()
    }
    token = (req: restify.Request, res: restify.Response, next: restify.Next):any =>{
        return this.tokenServ.authenticate(req.body.user, req.body.password, (isValid: boolean)=>{
            if(isValid){
                var token = this.tokenServ.token(req.body.user)
                res.json(token)
                return next()
            }else{
                return next(new InvalidCredentialsError('No authorization token was found'))
            }
        })
        /*return instance.authenticate(req.body.user, req.body.password, (data: any)=>{
            res.json(data.code, data.value);
            return next();
        });*/
    }
}


export { LoginController, ILoginController }
