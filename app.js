const express = require("express");
const path = require("path");

require("dotenv").config();

const fetch = require("node-fetch");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

const url =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const headers = {
  "X-CMC_PRO_API_KEY": process.env.APIKEY
};
app.get("/", (req, res) => {
  fetch(url, { method: "GET", headers: headers })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
  res.render("home");
});

app.listen(9000);
