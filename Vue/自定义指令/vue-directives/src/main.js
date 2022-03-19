import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('copy', {
  mounted(el, binding) {
    console.log('el-mounted');
    el.$value = binding.value
    el.handler = () => {
      const textarea = document.createElement('textarea')
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      textarea.value = el.$value
      document.body.appendChild(textarea)
      textarea.select()
      const result = document.execCommand('Copy')
      if(result) {
        console.log('复制成功');
      }
      console.log(textarea.value);
      console.log(document.body);
      // document.body.removeChild(textarea)
    }

    el.addEventListener('click', el.handler)
  },

  updated(el, binding) {
    console.log(el.$value);
    el.$value = binding.value
  },
})

app.mount('#app')
