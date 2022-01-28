<template>
  <div>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  methods: {
    increment() {
      this.$emit("increment");
    },
    decrement() {
      this.$emit("decrement");
    },
  },
};
</script>
