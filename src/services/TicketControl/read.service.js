const TicketControl = require("../../models/TicketControl.model");

module.exports.findTicketControlById = (id) => {
  try {
    if (typeof id != "string") {
      throw new Error("Id must be a string");
    }

    return TicketControl.findById(id);
  } catch (err) {
    console.log(err);
  }
};

module.exports.findLastTicketControl = async () => {
  try {
    const lastTicketControl = await TicketControl.findOne({});

    return lastTicketControl;
  } catch (err) {
    console.log(err);
  }
};

module.exports.getLastFour = async () => {
  try {
    let populatedLastTicket = await TicketControl.findOne({}).populate(
      "lastFour"
    );

    if (!populatedLastTicket) {
      populatedLastTicket = await TicketControl.findOne({}).populate(
        "lastFour"
      );
    }

    const lastFour = populatedLastTicket.lastFour;
    return lastFour;
  } catch (err) {
    console.log(err);
  }
};
