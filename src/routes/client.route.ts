import express from 'express'
import { addClient } from '../controller/client'
const router = express.Router()


router.post('/add',addClient)

export default router