<template>
  <div class="weather-detail">
    <div class="name">Tokyo</div>
    <div class="value">23</div>
    <img class="img" src="" alt="" />
    <div class="desc">Clear Sky</div>
  </div>
</template>

<script>
export default {
  name: "WeatherDetail",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.weather-detail {
  background-color: #555374;
  margin: 16px 0;
  width: 100%;
  height: 100%;
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
    height: 50px;
  }

  .desc {
    font-size: 24px;
  }
}
</style>
