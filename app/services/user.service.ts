import {User} from '../model/user'
import {IUserService} from '../contracts/user.interface' 
import * as Restify from 'restify'
import * as Jwt from 'jsonwebtoken' 

export class UserService implements IUserService {
    user: User
    getUser=(req: Restify.Request):User=>{
        var token:string | string[] = req.headers.authorization;
        var decoded:any = Jwt.decode(token.toString(), {complete: true});
        this.user.userName = decoded.payload.data.user
        this.user.role = decoded.payload.data.role
        return this.user
    }
    constructor(){
        this.user = new User();
    }
}

