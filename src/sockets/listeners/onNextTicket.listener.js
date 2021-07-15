const { nextTicket } = require("../../services/Ticket/Ticket.service");

module.exports.onNextTicketListener = (socket) => {
  socket.on("nextTicket", async (data, fn) => {
    const { number } = await nextTicket();

    fn(`Ticket ${number}`);
  });
};
