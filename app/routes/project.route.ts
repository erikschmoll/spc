import * as restify from 'restify'
import { config } from '../../config/env'
import { projectController, IprojectController } from '../controllers/project.controller'
import { requireAdmin } from '../auth'


export default (api: restify.Server) =>{
    let projCtrl: IprojectController = new projectController()
    api.get(config.routePrefix + '/project', requireAdmin, projCtrl.get)
}
