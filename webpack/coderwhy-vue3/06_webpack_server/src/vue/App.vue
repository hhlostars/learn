<template>
  <div>
    <h2>我是Vue渲染出来的</h2>
    <h2>{{ title }}</h2>
    <h3>wuyuzi</h3>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      title: 'aaa',
      message: '1231'
    }
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>