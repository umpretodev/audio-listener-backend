import messageRouter from "./message.route.js"
import userRouter from "./user.route.js"

const routes = (app) => {
    const endpoints = [userRouter, messageRouter]
    
    app.use('/', ...endpoints)
}

export { routes }