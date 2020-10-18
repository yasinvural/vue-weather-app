<template>
  <div class="weather-detail" v-if="weatherDetail">
    <div class="name">{{ weatherDetail.name }}</div>
    <div class="value">{{ weatherDetail.value }} °C</div>
    <img class="img" :src="image" alt="" />
    <div class="desc">{{ weatherDetail.desc }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import sunny from "../assets/sunny.png";
import rainy from "../assets/rainy.png";
import cloudy from "../assets/cloudy.png";

export default {
  name: "WeatherDetail",
  computed: {
    ...mapGetters({
      weatherDetail: "getWeatherDetail",
    }),
    image() {
      const { img } = this.weatherDetail;
      if (img === "sunny") {
        return sunny;
      } else if (img === "rainy") {
        return rainy;
      } else if (img === "cloudy") {
        return cloudy;
      }
      return null;
    },
  },
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
