<template>
  <div class="weather-detail">
    <div class="name">{{ name }}</div>
    <div class="value">{{ value }} °C</div>
    <img class="img" :src="image" alt="" />
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script>
import sunny from "../assets/sunny.png";
import rainy from "../assets/rainy.png";
import cloudy from "../assets/cloudy.png";

export default {
  name: "WeatherDetail",
  data() {
    return {
      name: "Tokyo",
      value: "23",
      img: "sunny",
      desc: "Clear Sky",
    };
  },
  computed: {
    image() {
      if (this.img === "sunny") {
        return sunny;
      } else if (this.img === "rainy") {
        return rainy;
      } else if (this.img === "cloudy") {
        return cloudy;
      }
      return null;
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.weather-detail {
  background-color: #555374;
  margin: 16px 0;
  padding: 16px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-size: 32px;
  }
  .value {
    font-size: 24px;
  }

  .img {
    object-fit: contain;
    height: 100px;
  }

  .desc {
    font-size: 24px;
  }
}
</style>
