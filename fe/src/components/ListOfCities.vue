<template>
  <div class="list-of-cities">
    <select @change="citySelected">
      <option v-for="city in cities" :key="city"> {{ city }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ListOfCities",
  data() {
    return {
      cities: ["Tokyo", "New York", "Ankara", "Dublin", "Londra", "Stockholm"],
    };
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
