import { sum } from './js/math'
import { createApp } from 'vue/dist/vue.esm-bundler'
const { priceFormat } = require('./js/format')

import App from './vue/App.vue'

import './js/element'

console.log(sum(10, 20));
console.log(priceFormat());

// const app = createApp({
//   template: `<h2>我是vue渲染出来的</h2>`,
//   data() {
//     return {
//       title: 'huhe'
//     }
//   },
// })
const app = createApp(App)

app.mount('#app')

console.log(12323232);