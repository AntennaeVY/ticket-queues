const { io } = require("../server");

const {
  onCurrentTicketEmitter,
} = require("./emitters/onCurrentTicket.emitter");

const { onDisconnectListener } = require("./listeners/onDisconnect.listener");
const { onNextTicketListener } = require("./listeners/onNextTicket.listener");
const { onServeTicketListener } = require("./listeners/onServeTicket.listener");
const { onGetTicketListener } = require("./listeners/onGetTicketDesk.listener");
const {
  onGetUpdatedScreenListener,
} = require("./listeners/onGetUpdatedScreen.listener");

io.on("connection", async (socket) => {
  console.log(
    "Client connected from ",
    socket.request.connection.remoteAddress
  );

  onCurrentTicketEmitter(socket);

  onGetUpdatedScreenListener(socket);
  onDisconnectListener(socket);
  onNextTicketListener(socket);
  onServeTicketListener(socket);
  onGetTicketListener(socket);
});
