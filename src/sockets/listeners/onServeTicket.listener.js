const { onUpdateScreenEmitter } = require("../emitters/onUpdateScreen.emitter");

const {
  serveFirstPendingTicket,
} = require("../../services/Ticket/Ticket.service");

module.exports.onServeTicketListener = (socket) => {
  socket.on("serveTicket", async (data, fn) => {
    if (!data.desk) {
      return fn({
        success: false,
        message: "Desk must be provided",
      });
    }

    const result = await serveFirstPendingTicket(data.desk);
    onUpdateScreenEmitter(socket);

    if (!result) {
      return fn({
        success: true,
        message: "No pending tickets left",
      });
    }

    return fn({
      success: true,
      message: `Currently with ${result.number}`,
    });
  });
};
