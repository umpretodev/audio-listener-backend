import audioRouter from "./audio.route.js"


const routes = (app) => {
    app.use('/', audioRouter)
}

export { routes }