const { getLastFour } = require("../../services/TicketControl/read.service");

module.exports.onGetUpdatedScreenListener = (socket) => {
  socket.on("getUpdatedScreen", async (data, fn) => {
    const lastFour = await getLastFour();

    fn(lastFour);
  });
};
