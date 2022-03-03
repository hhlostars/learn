import Vue from 'vue'
import App from './App.vue'
import HHUI from '../modules/huhe-ui'
import HelloWorld from './components/HelloWorld.vue'

function logA(Vue) {
  Vue.component(
    'HelloWorld', HelloWorld
  )
}

Vue.use(HHUI)
Vue.use(logA)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
