const Ticket = require("../../models/Ticket.model");

const { getTicketByNumber } = require("./read.service");

module.exports.updateTicketDesk = async (number, desk) => {
  try {
    if (isNaN(number) || isNaN(desk)) {
      throw new Error('Argument "number" and "desk" must be of type Number');
    }

    const updateTicket = await getTicketByNumber(number);

    updateTicket.desk = desk;
    await updateTicket.save();

    return updateTicket;
  } catch (err) {
    console.log(err);
  }
};
