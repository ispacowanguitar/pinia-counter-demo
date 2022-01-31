<template>
  <div>
    <button @click="addOne">increment</button>
    <button @click="subtractOne">decrement</button>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import useCountStore from "../store/count";
export default {
  name: "Buttons",
  methods: {
    ...mapActions(useCountStore, ["addOne", "subtractOne"])
  },
};
</script>
