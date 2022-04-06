// import _ from '../node_modules/lodash-es/lodash.default.js'
import _ from 'lodash-es'
import { createApp } from 'vue'
import { sum } from './js/math.js'
import mul from './ts/mul'
import App from './vue/App.vue'

import './css/style.css'
import './css/title.less'

console.log(sum(10, 20));
console.log(mul(20, 30));

const titleEl = document.createElement('div');
titleEl.className = "title";
titleEl.innerHTML = "Hello Vite";
document.body.appendChild(titleEl);

console.log(_.join(["abc", "cba"], "-"));

createApp(App).mount('#app')