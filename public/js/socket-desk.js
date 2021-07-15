var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has("desk")) {
  window.location = "index.html";
  throw new Error("Desk is required");
}

var desk = searchParams.get("desk");

$("h1").text("Desk " + desk);

var socket = io();

socket.on("connect", function () {
  console.log("Connected to the server");

  socket.emit("getTicketDesk", { desk: desk }, function (response) {
    $("h4").text(response.message);
  });
});

socket.on("disconnect", function () {
  console.log("Lost server connection");
});

$("button").on("click", function () {
  socket.emit("serveTicket", { desk: desk }, function (response) {
    $("h4").text(response.message);
  });
});
