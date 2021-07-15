const { findLastTicketControl } = require("../TicketControl/read.service");
const { createTicketControl } = require("../TicketControl/create.service");
const { deleteAllTicketControls } = require("../TicketControl/delete.service");

const { createTicket } = require("./create.service");
const { getTicketById } = require("./read.service");
const { updateTicketDesk } = require("./update.service");

module.exports.nextTicket = async () => {
  try {
    const lastTicket = await findLastTicketControl();

    lastTicket.last++;

    const newTicket = await createTicket({
      number: lastTicket.last,
    });

    lastTicket.pending.push(newTicket);
    await lastTicket.save();

    return newTicket;
  } catch (err) {
    console.log(err);
  }
};

module.exports.serveFirstPendingTicket = async (desk) => {
  try {
    if (isNaN(desk)) {
      throw new Error('Argument "desk" must be of type Number');
    }

    const current = await findLastTicketControl();

    if (current.pending.length == 0) {
      return null;
    }

    const pendingTicket = await getTicketById(current.pending.shift());
    const updatedTicket = await updateTicketDesk(pendingTicket.number, desk);

    current.lastFour.unshift(updatedTicket);

    if (current.lastFour.length > 4) {
      current.lastFour.splice(-1, 1);
    }

    await deleteAllTicketControls();
    await createTicketControl({
      last: current.last,
      today: current.today,
      pending: current.pending,
      lastFour: current.lastFour,
    });

    return updatedTicket;
  } catch (err) {
    console.log(err);
  }
};
