<template>
  <div>
    <setup name="fang" @loveFang="love" class="huhe" id="vue3"></setup>
  </div>
</template>

<script>
import Setup from "./components/_setup.vue";
export default {
  components: {
    Setup,
  },
  methods: {
    love() {
      console.log("love");
    },
  },
};
</script>

<style scoped>
</style>