import * as restify from 'restify'
import { config } from '../../config/env'
import {LoginController, ILoginController} from '../controllers/login.controller'


export default (api: restify.Server) =>{
    let loginCtrl: ILoginController = new LoginController()
    api.post(config.routePrefix + '/token', loginCtrl.token)
}
