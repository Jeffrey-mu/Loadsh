/** Detect free variable `global` from Node.js. */
/* 返回全局变量 不满足返回false */
const freeGlobal = typeof global === 'object' && global !== null && global.Object === Object && global
// console.log(globalThis)
export default freeGlobal
