const express = require("express");
const { response } = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello Weather App !!");
});

router.get("/cities", (req, res) => {
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

module.exports = router;
