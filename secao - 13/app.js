import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import homeRoutes from './src/routes/homeRoutes.js'
import './src/database'

class App {
    constructor (){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares () {
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json())
    }

    routes () {
        this.app.use('/', homeRoutes)
    }
} 

export default new App().app //exportar somente o express