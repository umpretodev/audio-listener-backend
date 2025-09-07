import { Router } from 'express'
import messageController from '../controllers/message.controller.js'

const messageRouter = Router()

messageRouter.get('/messages', messageController.get)

export default messageRouter