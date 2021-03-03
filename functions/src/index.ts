import * as express from "express";
const functions = require("firebase-functions");
const stripe = require("stripe")(
  "sk_test_51IPI4WHpJiHwmrzfQNvOCQXPypFUBUdVShSws1aBfKLinI2pZKaGrAlZdQmvwRHIH5HwD1J20WcZw6eOBmO6zJ5h00Mtt61ow9"
);
const cors = require("cors");
const app = express();

app.use(require("body-parser").text());
app.use(cors());

app.post("/charge", async (req, res) => {
  try {
    console.log("charge start");

    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: "jpy",
      description: "An example charge",
      source: req.body,
    });

    res.json({ status });
    console.log("charge 正常終了");
  } catch (err) {
    console.log("charge 異常終了", err);
    res.status(500).end();
  }
});

const api = functions.https.onRequest(app);
module.exports = { api };
