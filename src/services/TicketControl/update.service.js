const TicketControl = require("../../models/TicketControl.model");

module.exports.updateTicketControlById = (id, update) => {
  try {
    if (typeof id != "string") {
      throw new Error("Id must be a string");
    } else if (typeof update != "object") {
      throw new Error("Update must be an object");
    }

    return TicketControl.findByIdAndUpdate(id, update);
  } catch (err) {
    console.log(err);
  }
};
