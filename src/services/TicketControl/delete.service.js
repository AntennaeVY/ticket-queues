const TicketControl = require("../../models/TicketControl.model");

module.exports.deleteTicketControlById = (id) => {
  try {
    if (typeof id != "string") {
      throw new Error("Id must be a string");
    }

    return TicketControl.deleteOneById(id);
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteAllTicketControls = () => {
  try {
    return TicketControl.deleteMany({});
  } catch (err) {
    console.log(err);
  }
};
