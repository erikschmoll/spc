import { config } from '../../config/env'

var ActiveDirectory = require('activedirectory');

interface IConnect{
    authenticate(user:string, password: string, cb: any):void;
}

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
                result = { code: 400, value: err };
              }
              
              if (auth) {
                result = { code: 200, value: { hello: "hi " + user } };
              }
              else {
                result = { code: 400, value: {error: 'user_invalid' } };
              }
              cb(result);
        });
    }

}

export { ADService }
