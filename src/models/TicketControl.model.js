const { Schema, model } = require("mongoose");

const TicketControlSchema = new Schema({
  last: {
    type: Number,
    required: true,
  },

  today: {
    type: Date,
    required: true,
  },

  pending: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],

  lastFour: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
});

const TicketControl = model("TicketControl", TicketControlSchema);

module.exports = TicketControl;
