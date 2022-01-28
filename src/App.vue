<template>
  <div class="app-wrapper">
    <Buttons @increment="addOne" @decrement="subtractOne" />
    <CountDisplay :count="count" />
  </div>
</template>

<script>
import Buttons from "./components/Buttons.vue";
import CountDisplay from "./components/CountDisplay.vue";

export default {
  name: "App",
  components: { Buttons, CountDisplay },
  data() {
    return { count: 0 };
  },
  methods: {
    addOne() {
      this.count++;
    },
    subtractOne() {
      this.count--;
    },
  },
};
</script>

<style scoped>
.app-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
