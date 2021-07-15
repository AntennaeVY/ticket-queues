const { getLastTicketByDesk } = require("../../services/Ticket/read.service");

module.exports.onGetTicketListener = (socket) => {
  socket.on("getTicketDesk", async (data, fn) => {
    if (!data.desk) {
      return fn({
        success: false,
        message: "Desk must be provided",
      });
    }

    const result = await getLastTicketByDesk(data.desk);

    if (!result) {
      return fn({
        success: true,
        message: "Currently with no tickets",
      });
    }

    return fn({
      success: true,
      message: `Currently with ${result.number}`,
    });
  });
};
