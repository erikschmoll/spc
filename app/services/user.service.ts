import {User} from '../model/user'
import {IUserService} from '../contracts/user.interface' 
import * as Restify from 'restify'
import * as Jwt from 'jsonwebtoken' 

export class UserService implements IUserService {
    user: User
    getUser=(req: Restify.Request):User=>{
        var token:string | string[] = req.headers.authorization;
        var decoded:any = Jwt.decode(token.toString(), {complete: true});
        this.user.userName = decoded.user
        this.user.role = decoded.role
        return this.user
    }
}

