import express from 'express'
const router = express.Router()

import clientRouter from './client.route'

router.use('/client',clientRouter)

export default router