import { Router } from 'express'

const userRouter = Router()

userRouter.post('/users', (request, response) => {
    response.status(201).send({ id: '12312321', name: 'Fernando'})

})

export default userRouter