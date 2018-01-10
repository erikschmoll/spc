import * as restify from 'restify'


interface IprojectController{
    get(req: restify.Request, res: restify.Response, next: restify.Next): any;
} 

class projectController implements IprojectController{
    get = (req: restify.Request, res: restify.Response, next: restify.Next) =>{
        res.json(200,{name: 'my project'})
    }
}

export { projectController, IprojectController }
