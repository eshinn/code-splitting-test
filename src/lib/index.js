// const fns = function (F) {
//   return function(msg) {
//     console.log(msg)
//   }
// }

// const fns = function (Fn) {
//   return function(...args) {
//     // console.log(this, `Coming from ${this}`)
//     // import(`lib/${Fn}`).then(function(s) {s.apply(this, args)})
//     return import(`lib/${Fn}`)
//     // import(`lib/${Fn}`).then(function(s) {
//       // console.log(s)
//       // console.log('in deep', this)
//       // console.log(s)
//       // s(...args)
//     // })
//   }
// }

// function fn(...args) {
//   import('lib/logger').then(fn => fn.apply(this,args))
// }

// const fn = (n) => function(...args) { return import(/*webpackChunkName:'logger'*/`lib/${n}`).then(fn => fn.apply(this,args))}
// const fn2 = (n) => function(...args) { return import(/*webpackChunkName:'add'*/`lib/add`).then(fn => fn.apply(this,args))}

const fn = (n) => function(...args) { return import(/*webpackChunkName:'logger'*/`lib/${n}`).then(fn => fn.apply(this,args))}


module.exports = {
  // log: (...args) => import('lib/log').then(fn => fn.apply(this, args)),
  // logger: fns.call(null, 'logger'),
  // logger: function(...args) {console.log.apply(window, [this]); console.log.apply(window, args)},
  // logger: function(...args) {
  //   return function(...a) {
  //     console.log(...a)
  //   }.apply(this, args)
  // },
  // logger: function (...args) {import('lib/logger').then(fn => fn.apply(this,args))},
  // logger: ((name) => {
  //   return function(...args) {import(`lib/${name}`).then(fn => fn.apply(this,args))}
  // })('logger'),
  logger: fn('logger'),
  // add: (...args) => import(webpackChunkName:"add"'lib/add').then(fn => fn.apply(this, args)),
  add: fn('add'),
}
