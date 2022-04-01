import '../css/style.css'
import '../css/title.less'
import '../css/image.css'
import '../font/iconfont.css'

import zznhImage from '../img/zznh.png'

const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = '方露莹'

const bgDivEl = document.createElement('div')
bgDivEl.className = "image-bg"

const imgEl = document.createElement('img')
imgEl.src = zznhImage


const iEl = document.createElement('i')
iEl.classname = 'iconfont icon-ashbin'

document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgEl)
document.body.appendChild(iEl)