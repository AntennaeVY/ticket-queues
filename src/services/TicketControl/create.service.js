const TicketControl = require("../../models/TicketControl.model");

module.exports.createTicketControl = (data) => {
  try {
    if (isNaN(data.last) || !(data.today instanceof Date)) {
      throw new Error(
        'Data must contain "last" property of type Number and "today" property of type Date'
      );
    }

    return TicketControl.create(data);
  } catch (err) {
    console.log(err);
  }
};
