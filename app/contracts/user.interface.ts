import * as Restify from 'restify'
import {User} from '../model/user'

export interface IUserService{
    getUser(req: Restify.Request):User;
}