<template>
  <div class="home">
    <ListOfCities />
    <WeatherDetail />
  </div>
</template>

<script>
import ListOfCities from "./ListOfCities";
import WeatherDetail from "./WeatherDetail";

export default {
  name: "Home",
  components: {
    ListOfCities,
    WeatherDetail,
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 50%;
  height: 100vh;
  margin: 0 25%;
}
</style>
