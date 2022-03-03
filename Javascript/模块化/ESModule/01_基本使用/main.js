// 1.
// import { name, age} from './foo.js'

// 2.别名
// import { name as fname, age} from './foo.js'

// 3. 导出所有
import * as foo from './foo.js'

// console.log(name, age);
// console.log(fname, age);
console.log(foo.name, foo.age);