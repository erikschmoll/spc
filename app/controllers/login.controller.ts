import * as restify from 'restify'
import { ADService } from '../services/ad.service'

interface ILoginController{
    token(req: restify.Request, res: restify.Response, next: restify.Next):any;
}

class LoginController implements ILoginController{
    token = (req: restify.Request, res: restify.Response, next: restify.Next):any =>{
        var instance = new ADService();
        return instance.authenticate(req.body.user, req.body.password, (data: any)=>{
            return res.json(data.code, data.value);
        });
    }
}


export { LoginController, ILoginController }
