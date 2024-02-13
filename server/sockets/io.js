module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("🚀 ~ socket.on ~ new socket connection")

    let currentCode = null
    socket.on("move", function (move) {
      console.log("🚀 ~ socket.on ~ move:", move)

      io.to(currentCode).emit("newMove", move)
    })

    socket.on("joinGame", function (data) {
      currentCode = data.code
      socket.join(currentCode)
      if (!games[currentCode]) {
        games[currentCode] = true
        return
      }

      io.to(currentCode).emit("startGame")
    })

    socket.on("disconnect", function () {
      console.log("🚀 ~ socket.on ~ socket disconnection")

      if (currentCode) {
        io.to(currentCode).emit("gameOverDisconnect")
        delete games[currentCode]
      }
    })
  })
}
