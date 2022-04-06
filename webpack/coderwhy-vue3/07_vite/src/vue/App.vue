<template>
  <div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '无语'
    }
  },
}
</script>

<style scoped>
h2 {
  color: white;
}
</style>