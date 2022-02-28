import Observer from './Observer'

export default function observe (val) {
  console.info('observe初始判断是否为对象', val);
  if (typeof val !== 'object') {
    console.log(val, '不是对象');
    return;
  }
  var ob;
  if (typeof val.__ob__ !== 'undefined') {
    ob = val.__ob__
  } else {
    ob = new Observer(val)
  }
  return ob
}