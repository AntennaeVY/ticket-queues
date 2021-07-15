const { getLastFour } = require("../../services/TicketControl/read.service");

module.exports.onUpdateScreenEmitter = async (socket) => {
  const lastFour = await getLastFour();

  socket.broadcast.emit("updateScreen", lastFour);
};
