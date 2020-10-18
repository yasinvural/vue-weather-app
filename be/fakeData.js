const cities = [
  { id: 1, name: "Tokyo" },
  { id: 2, name: "London" },
  { id: 3, name: "New York" },
  { id: 4, name: "Dublin" },
  { id: 5, name: "Ankara" },
  { id: 6, name: "Stockholm" },
];

const weatherDetailList = [
  { id: 1, name: "Tokyo", value: 14, img: "cloudy", desc: "Mostly Clear" },
  { id: 2, name: "London", value: 8, img: "rainy", desc: "Rainy" },
  { id: 3, name: "New York", value: 11, img: "cloudy", desc: "Partly Cloudy" },
  { id: 4, name: "Dublin", value: 11, img: "cloudy", desc: "Mostly Cloudy" },
  { id: 5, name: "Ankara", value: 21, img: "sunny", desc: "Clear Sky" },
  { id: 6, name: "Stockholm", value: 6, img: "rainy", desc: "Mostly Rainy" },
];

const getCities = () => {
  return cities;
};

const getWeatherDetailById = (id) => {
  return weatherDetailList.find((weather) => weather.id === +id);
};

module.exports = {
  getCities,
  getWeatherDetailById,
};
