<template>
  <div>
    Home Page
    <h3>{{ name }}</h3>
    <h3>{{ title }}</h3>
    <h3>counter: {{ counter }}</h3>
    <button @click="add">addCounter</button>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
  props: {
    name: {
      type: String,
    },
  },
  setup(props, context) {
    console.log('setupvue3 ');
    onMounted(() => {
      console.log("挂载好");
    });
    const counter = ref(0);
    const state = reactive({
      song: "jj",
    });
    console.log(props.name);
    // context 包含 attrs、slots、emit
    const { attrs, slots, emit } = context;
    console.log("attrs", attrs);
    console.log("slots", slots);
    console.log("emit", emit);
    emit("loveFang");

    function add() {
      counter.value++;
    }

    return {
      title: "huhe-love",
      counter,
      add,
      state,
    };
  },
};
</script>

<style scoped>
</style>