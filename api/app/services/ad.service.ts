import { config } from '../../config/env'
import { IConnect } from '../contracts/connect.interface'

var ActiveDirectory = require('activedirectory')

class ADService implements IConnect{
    authenticate = (user:string, password: string, cb: any):void => {
        var options = { 
                url: config.ad.ldap,
                baseDN: config.ad.baseDN,
                username: user,
                password: password 
            }
        var ad = new ActiveDirectory(options)
        ad.authenticate(user, password, (err: any, auth: any)=>{
            var result: any;
            if (err) {
                result = false//{ code: 400, value: err };
              }
              
              if (auth) {
                result = true // { code: 200, value: { hello: "hi " + user } };
              }
              else {
                result = false// { code: 400, value: {error: 'user_invalid' } };
              }
              cb(result);
        });
    }

}

export { ADService }
