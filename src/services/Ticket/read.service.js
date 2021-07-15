const Ticket = require("../../models/Ticket.model");

const {
  Types: { ObjectId },
} = require("mongoose");

module.exports.getTicketByNumber = async (number) => {
  if (isNaN(number)) {
    throw new Error('Argument "number" must be of type Number');
  }

  return await Ticket.findOne({ number });
};

module.exports.getTicketById = async (id) => {
  if (!(id instanceof ObjectId)) {
    throw new Error('Argument "id" must be of type ObjectId');
  }

  return await Ticket.findById(id);
};

module.exports.getLastTicketByDesk = async (desk) => {
  if (isNaN(desk)) {
    throw new Error('Argument "desk" must be of type Number');
  }

  const lastTicket = await Ticket.find({ desk }).sort({ number: "desc" });

  return lastTicket[0];
};
