function updateQueue(lastFour) {
  var tickets = [$("#ticket1"), $("#ticket2"), $("#ticket3"), $("#ticket4")];
  var desks = [$("#desk1"), $("#desk2"), $("#desk3"), $("#desk4")];

  for (var i = 0; i < lastFour.length; i++) {
    tickets[i].text("Ticket " + lastFour[i].number);
    desks[i].text("Desk " + lastFour[i].desk);
  }
}

var socket = io();

socket.on("connect", function () {
  console.log("Connected to the server");
  socket.emit("updateScreen", null, function (lastFour) {
    updateQueue(lastFour);
  });
});

socket.on("updateScreen", function (lastFour) {
  updateQueue(lastFour);
});

socket.on("disconnect", function () {
  console.log("Lost server connection");
});
