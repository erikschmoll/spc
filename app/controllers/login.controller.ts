import * as restify from 'restify'
import { ADService } from '../services/ad.service'

interface ILoginController{
    token(user:string, password: string):any;
}

class LoginController implements ILoginController{
    token = (user:string, password: string):any =>{
        var instance = new ADService();
        instance.authenticate(user, password, (ad: any)=>{
            return ad;
        });
    }
}


export { LoginController, ILoginController }
