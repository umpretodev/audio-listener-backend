const messageController = {
    get: async (request, response) => {
        response.status(200).send({"message": "Hello, world!"})
    }
}

export default messageController