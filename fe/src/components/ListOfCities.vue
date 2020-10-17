<template>
  <div class="list-of-cities">
    <select @change="citySelected">
      <option v-for="city in cities" :key="city.id"> {{ city.name }}</option>
    </select>
  </div>
</template>

<script>
import { get } from "../services/baseService";

export default {
  name: "ListOfCities",
  data() {
    return {
      cities: [],
    };
  },
  async mounted() {
    const citiesData = await get("api/cities");
    this.cities = citiesData.data;
  },
  methods: {
    citySelected(event) {
      console.log(event.target.value);
    },
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
