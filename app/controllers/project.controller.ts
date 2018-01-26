import * as restify from 'restify'
import { Project } from '../model/project'
import {User} from '../model/user'
import {UserService} from '../services/user.service'

interface IprojectController{
    get(req: restify.Request, res: restify.Response, next: restify.Next): any;
} 

class projectController implements IprojectController{
    userServ: UserService;
    constructor(){
        this.userServ = new UserService();
    }
    
    get = (req: restify.Request, res: restify.Response, next: restify.Next) =>{
        var user: User = this.userServ.getUser(req);
        res.json(200, new Project('my porject'))
        return next();
    }

}

export { projectController, IprojectController }
