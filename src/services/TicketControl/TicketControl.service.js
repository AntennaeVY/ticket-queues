const { createTicketControl } = require("./create.service");
const { deleteAllTicketControls } = require("./delete.service");
const { findLastTicketControl } = require("./read.service");

const { deleteAllTickets } = require("../Ticket/delete.service");

module.exports.initializateTicketControl = async () => {
  try {
    const lastTicket = await findLastTicketControl();

    if (lastTicket) {
      if (lastTicket.today.getDate() == new Date().getDate()) {
        await deleteAllTicketControls();
        return await createTicketControl({
          last: lastTicket.last,
          today: lastTicket.today,
          pending: lastTicket.pending,
          lastFour: lastTicket.lastFour,
        });
      } else {
        this.resetTicketControl();
      }
    }

    return await createTicketControl({
      last: 0,
      today: new Date(),
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.resetTicketControl = async () => {
  try {
    await deleteAllTicketControls();
    await deleteAllTickets();
    return await createTicketControl({
      last: 0,
      today: new Date(),
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.lastGeneratedTicketNumber = async () => {
  try {
    let lastTicketControl = await findLastTicketControl();

    if (!lastTicketControl) {
      lastTicketControl = await findLastTicketControl();
    }

    return lastTicketControl.last;
  } catch (err) {
    console.log(err);
  }
};
