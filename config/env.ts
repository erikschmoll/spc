import * as path from 'path'

interface ConfigSettings{
    root: string
    name: string
    port: number
    env: string
    db: string
    debug: boolean
}

const env: string = process.env.NODE_ENV || 'development'
const debug: boolean = JSON.parse(process.env.DEBUG || 'false')

const config: ConfigSettings = {
    root: path.join(__dirname, '/..'),
    name: 'spc',
    port: 5000,
    env: env,
    db: 'mongodb://localhost:27017/dev',
    debug: debug
}
if(env === 'test'){
    config.db = 'mongodb://localhost:27017/test'
}
else if(env === 'prod'){
    config.port = 5005
    config.db = 'mongodb://localhost:27017/prod'
    config.debug = false
}

export { config }
