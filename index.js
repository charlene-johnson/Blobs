const server = require("./server")

const port = process.env.PORT || 6060

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})