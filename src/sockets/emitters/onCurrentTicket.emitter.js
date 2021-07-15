const {
  lastGeneratedTicketNumber,
} = require("../../services/TicketControl/TicketControl.service");

module.exports.onCurrentTicketEmitter = async (socket) => {
  const last = await lastGeneratedTicketNumber();
  socket.emit("currentTicket", `Ticket ${last}`);
};
