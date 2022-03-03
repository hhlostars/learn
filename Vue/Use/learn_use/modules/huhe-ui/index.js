import HHButton from './components/h-button.vue'
import HHInput from './components/h-input.vue'

const components = [
  HHButton,
  HHInput
]

const HHUI = {
  install(Vue, option) {
    console.log(option);
    console.log('执行一段逻辑...');
    components.forEach(component => {
      Vue.component(component.name, component)
      console.log(component);
    })
  }
}

export default HHUI