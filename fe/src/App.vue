<template>
  <div>
    <Header />
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
    Home,
  },
};
</script>
<style lang="scss">

</style>
