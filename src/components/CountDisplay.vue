<template>
  <h3>{{ count }}</h3>
</template>
<script>
import { mapState } from 'pinia';
import useCountStore from "../store/count";
export default {
  name: "CountDisplay",
  computed: {
    ...mapState(useCountStore, ["count"])
  }
};
</script>
