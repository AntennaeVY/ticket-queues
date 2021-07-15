var socket = io();

socket.on("connect", function () {
  console.log("Connected to the server");
});

socket.on("disconnect", function () {
  console.log("Lost server connection");
});

const label = $("#newTicket");

socket.on("currentTicket", function (current) {
  label.text(current);
});

$("button").on("click", function () {
  socket.emit("nextTicket", null, function (newTicket) {
    label.text(newTicket);
  });
});
