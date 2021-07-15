const Ticket = require("../../models/Ticket.model");

module.exports.createTicket = (data) => {
  try {
    if (isNaN(data.number)) {
      throw new Error('Data must contain "number" property of type Number');
    }

    return Ticket.create(data);
  } catch (err) {
    console.log(err);
  }
};
