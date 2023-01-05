const {connectServer} = require('./server.js')
const {PORT} = require('./config/config.js')



//CONNECT SERVER
const server = connectServer(PORT)

//SOCKET SERVER
require('./socket.js')






