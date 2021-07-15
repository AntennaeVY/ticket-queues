const Ticket = require("../../models/Ticket.model");

module.exports.deleteTickeById = (id) => {
  try {
    if (typeof id != "string") {
      throw new Error("Id must be a string");
    }

    return Ticket.deleteOneById(id);
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteAllTickets = () => {
  try {
    return Ticket.deleteMany({});
  } catch (err) {
    console.log(err);
  }
};
