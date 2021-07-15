const { io } = require("../server");

const {
  onCurrentTicketEmitter,
} = require("./emitters/onCurrentTicket.emitter");
const { onUpdateScreenEmitter } = require("./emitters/onUpdateScreen.emitter");

const { onDisconnectListener } = require("./listeners/onDisconnect.listener");
const { onNextTicketListener } = require("./listeners/onNextTicket.listener");
const { onServeTicketListener } = require("./listeners/onServeTicket.listener");
const { onGetTicketListener } = require("./listeners/onGetTicketDesk.listener");
const {
  onUpdateScreenListener,
} = require("./listeners/onUpdateScreen.listener");

io.on("connection", async (socket) => {
  console.log(
    "Client connected from ",
    socket.request.connection.remoteAddress
  );

  onCurrentTicketEmitter(socket);
  onUpdateScreenEmitter(socket);

  onUpdateScreenListener(socket);
  onDisconnectListener(socket);
  onNextTicketListener(socket);
  onServeTicketListener(socket);
  onGetTicketListener(socket);
});
