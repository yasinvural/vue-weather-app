<template>
  <div class="list-of-cities">
    <select @change="citySelected">
      <option v-for="city in cities" :key="city.id"> {{ city.name }}</option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { get } from "../services/baseService";

export default {
  name: "ListOfCities",
  async mounted() {
    const citiesData = await get("api/cities");
    this.setCities(citiesData.data);
    const { id } = citiesData.data[0];
    const weatherData = await get(`api/weather?id=${id}`);
    this.setWeatherDetail(weatherData.data);
  },
  methods: {
    ...mapActions(["setCities", "setWeatherDetail"]),
    async citySelected(event) {
      const cityObj = this.cities.find(
        (city) => city.name === event.target.value
      );
      const { id } = cityObj;
      const weatherData = await get(`api/weather?id=${id}`);
      this.setWeatherDetail(weatherData.data);
    },
  },
  computed: {
    ...mapGetters({
      cities: "getCities",
    }),
  },
};
</script>

<style scoped lang="scss">
.list-of-cities {
  width: 100%;
  select {
    width: 100%;
  }
}
</style>
