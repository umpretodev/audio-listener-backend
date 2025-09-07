import { Router } from 'express'
import AudioController from '../controllers/audio.controller.js'

const audioRouter = Router() 

audioRouter.post('/audio/upload', AudioController.upload)


export default audioRouter