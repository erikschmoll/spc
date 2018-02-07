import * as auth0 from 'jsonwebtoken'
import { ADService } from './ad.service'
import { MockService } from './mock.service'
import { config } from '../../config/env'
import { IConnect } from '../contracts/connect.interface'
import { IAuth } from '../contracts/auth.interface'


export class Auth implements IConnect, IAuth{
    adServ: ADService
    constructor(){
        this.adServ = new ADService(); 
    }

    authenticate = (user:string, password: string, cb: any):void => {
        let result : boolean
        if(config.env === "dev"){
            this.adServ = new MockService(); 
        }
        this.adServ.authenticate(user, password,cb)
    }
    token = (user: string): any =>{
        var token = auth0.sign({ data: { user: user, role: 'default' } }, 
                        config.auth.tokenSecret, { expiresIn: config.auth.timeExp });
        return token;
    }
    
}


