import * as restify from 'restify'
import {projectController, IprojectController} from '../controllers/project.controller'


export default (api: restify.Server) =>{
    let projCtrl: IprojectController = new projectController();
    api.get('api/project', projCtrl.get)
}
