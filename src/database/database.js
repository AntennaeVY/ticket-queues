const mongoose = require("mongoose");

(async () => {
  await mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB is connected");
      require("../services/TicketControl/TicketControl.service").initializateTicketControl();
    })
    .catch((e) => {
      console.log("DB Error: ", e);
    });
})();
