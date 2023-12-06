import express from 'express'
const router = express.Router()

import clientRouter from './client.route'
import taskRouter from './task.route'

router.use('/client',clientRouter)
router.use('/task',taskRouter)

export default router