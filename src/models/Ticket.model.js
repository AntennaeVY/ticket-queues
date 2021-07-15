const { Schema, model } = require("mongoose");

const TicketSchema = new Schema({
  number: {
    type: Number,
  },

  desk: {
    type: Number,
  },
});

const Ticket = model("Ticket", TicketSchema);

module.exports = Ticket;
