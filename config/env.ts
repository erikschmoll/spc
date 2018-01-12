import * as path from 'path'

declare var __dirname: string;
declare var process: any;

interface ConfigSettings{
    root: string
    name: string
    port: number
    env: string
    connectionString: string
    debug: boolean
    routePrefix: string
}

const env: string = process.env.NODE_ENV || 'dev'
const debug: boolean = JSON.parse(process.env.DEBUG || 'false')
const version: string = process.env.VERSION || 'v1'

const config: ConfigSettings = {
    root: path.join(__dirname, '/..'),
    name: 'spc',
    port: 5000,
    env: env,
    connectionString: "mongodb+srv://spc:sofrecom10!@cluster0-uyim5.mongodb.net/dev",
    debug: debug,
    routePrefix: 'api' + "/" + version
}
if(env === 'test'){
    config.connectionString = "mongodb+srv://spc:sofrecom10!@cluster0-uyim5.mongodb.net/test"
}
else if(env === 'prod'){
    config.port = 5005
    config.connectionString = "mongodb+srv://spc:sofrecom10!@cluster0-uyim5.mongodb.net/prod"
    config.debug = false
}

export { config }
