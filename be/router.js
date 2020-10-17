const express = require("express");
const { response } = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello Weather App !!");
});

router.get("/api/cities", (req, res) => {
  // TODO: get cities from db
  const cities = [
    { id: 1, name: "Tokio" },
    { id: 2, name: "London" },
    { id: 3, name: "New York" },
    { id: 4, name: "Dublin" },
    { id: 5, name: "Ankara" },
    { id: 6, name: "Stockholm" },
  ];
  res.status(200).send(cities);
});

router.get("/api/weather", (req, res) => {
  const { id } = req.query;
  // TODO: get detail from db
  if (id) {
    const weatherDetail = {
      id: 1,
      name: "Tokio",
      value: 24,
      img: "sunny",
      desc: "Clear Sky",
    };
    res.status(200).send(weatherDetail);
  } else {
    throw new Error("not found");
  }
});

module.exports = router;
