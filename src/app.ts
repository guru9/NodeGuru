import express from 'express'
import cors from 'cors'
import { getConfig } from './config'
import router from './application/routes'
import { createServer } from 'http'

//set the express to app
const app = express()


/* 
use middleware to express
 */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const CLIENT_URL = getConfig().CLIENT_URL || '*'
app.use(
	cors({
		origin: CLIENT_URL,
	})
)

app.use('/api', router)


/* 
connect to http service and socket io server
 */
const server = createServer(app)

export default server