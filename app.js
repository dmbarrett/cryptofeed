const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config({ path: ".env" });

const getCache = require("./services/cache").getCache;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const url =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const headers = {
  "X-CMC_PRO_API_KEY": process.env.APIKEY
};
app.get("/latestlistings", (req, res) => {res.json(getCache('latestListings'))});

app.listen(9000);
