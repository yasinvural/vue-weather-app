const express = require("express");
const router = express.Router();
const { getCities, getWeatherDetailById } = require("./fakeData");

router.get("/", (req, res) => {
  res.status(200).send("Hello Weather App !!");
});

router.get("/api/cities", (req, res) => {
  const cities = getCities();
  res.status(200).send(cities);
});

router.get("/api/weather", (req, res) => {
  const { id } = req.query;
  const weatherDetail = getWeatherDetailById(id);
  res.status(200).send(weatherDetail);
});

module.exports = router;
