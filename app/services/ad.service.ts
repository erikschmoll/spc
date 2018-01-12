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
                result = { code: 400, data: err };
              }
              
              if (auth) {
                result = { code: 200, data: { hallo: "hi " + user } };
              }
              else {
                result = { code: 400, data: {error: 'user_invalid' } };
              }
              return result;
        });
    }

}

export { ADService }
