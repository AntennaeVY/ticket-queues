const { getLastFour } = require("../../services/TicketControl/read.service");

module.exports.onUpdateScreenListener = (socket) => {
  socket.on("updateScreen", async (data, fn) => {
    const lastFour = await getLastFour();

    fn(lastFour);
  });
};
