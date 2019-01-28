const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dateFns = require("date-fns");
//app.use(bodyParser.json()); // Active la possibilité de récupérer les paramètres transmis avec la méthode HTTP POST

const booking = [
  {
    date: "2019-01-31",
    slots: {
      "1000": { isAvailable: true },
      "1030": { isAvailable: true },
      "1100": { isAvailable: true },
      "1130": { isAvailable: true },
      "1400": { isAvailable: true },
      "1430": { isAvailable: true },
      "1500": { isAvailable: true },
      "1530": { isAvailable: true },
      "1600": { isAvailable: true },
      "1630": { isAvailable: true },
      "1700": { isAvailable: true },
      "1730": { isAvailable: true }
    }
  }
];

app.get("/visits", (req, res) => {
  for (let i = 0; i < booking.length; i++) {
    if (booking[i].date === req.query.date) {
      return res.json(booking[i]);
    }
  }
  const newBooking = {
    date: req.query.date,
    slots: {
      "1000": { isAvailable: true },
      "1030": { isAvailable: true },
      "1100": { isAvailable: true },
      "1130": { isAvailable: true },
      "1400": { isAvailable: true },
      "1430": { isAvailable: true },
      "1500": { isAvailable: true },
      "1530": { isAvailable: true },
      "1600": { isAvailable: true },
      "1630": { isAvailable: true },
      "1700": { isAvailable: true },
      "1730": { isAvailable: true }
    }
  };

  booking.push(newBooking);
  res.json(newBooking);
});

const sendError = res => {
  return res.status(400).json({
    error: {
      message: "Invalid request"
    }
  });
};

app.post("/visits", (req, res) => {
  // Pour afficher les données reçues :
  console.log(req.body);
  if (dateFns.isPast(req.query.date) === true) {
    return sendError(res);
  }

  if (
    req.query.slots !== 1000 &&
    eq.query.slots !== 1030 &&
    req.query.slots !== 1100 &&
    req.query.slots !== 1130 &&
    req.query.slots !== 1400 &&
    req.query.slots !== 1430 &&
    req.query.slots !== 1500 &&
    req.query.slots !== 1530 &&
    req.query.slots !== 1600 &&
    req.query.slots !== 1630 &&
    req.query.slots !== 1700 &&
    1730
  ) {
    return res.status(400).json({
      error: {
        message: "Invalid request"
      }
    });
  }
});

const slots = req.query.slots;

for (let i = 0; i < booking.length; i++) {
  if (booking[i].date === req.query.date) {
    if (booking[i][slots]) {
    }
  }
}
//   // Pour ajouter un student
//   const newBooking = req.body.date;
//   bookink.push(newBooking);
//   res.json(booking);
// });

app.listen(3000, () => {
  console.log("Server started");
});
