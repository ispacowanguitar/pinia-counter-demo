<template>
  <div class="app-wrapper">
    <Buttons />
    <CountDisplay />
  </div>
</template>

<script>
import Buttons from "./components/Buttons.vue";
import CountDisplay from "./components/CountDisplay.vue";

export default {
  name: "App",
  components: { Buttons, CountDisplay },
};
</script>

<style scoped>
.app-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
