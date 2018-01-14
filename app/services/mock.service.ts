import { IConnect } from '../contracts/connect.interface'
import { config } from '../../config/env'

export class MockService implements IConnect{
    authenticate = (user:string, password: string, cb: any):void => {
        cb(user === password)
    }

}