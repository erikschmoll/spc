import * as restify from 'restify'
import { Project } from '../model/project'

interface IprojectController{
    get(req: restify.Request, res: restify.Response, next: restify.Next): any;
} 

class projectController implements IprojectController{
    get = (req: restify.Request, res: restify.Response, next: restify.Next) =>{
        res.json(200, new Project('my porject'))
        return next();
    }
}

export { projectController, IprojectController }
