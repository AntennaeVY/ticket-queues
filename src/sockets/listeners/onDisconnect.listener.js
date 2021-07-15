module.exports.onDisconnectListener = (socket) => {
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
};
