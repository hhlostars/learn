<template>
  <div id="app">
    <h1>Vue中render函数的妙用</h1>
    <HelloWorld :level="1">hello word</HelloWorld>
    <HelloWorld :level="2">hello word</HelloWorld>
    <HelloWorld :level="3">hello word</HelloWorld>
    <HelloWorld :level="4">hello word</HelloWorld>
    <HelloWorld :level="5">hello word</HelloWorld>

    <hello-world-render :level="1">hello word</hello-world-render>
    <hello-world-render :level="2">hello word</hello-world-render>
    <hello-world-render :level="3">hello word</hello-world-render>
    <hello-world-render :level="4">hello word</hello-world-render>
    <hello-world-render :level="5">hello word</hello-world-render>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import HelloWorldRender from './components/HelloWorldRender'


export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorldRender
  }
}
</script>

<style>

</style>
