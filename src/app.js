// import { logger } from 'lib'
// import { add } from 'lib'

import { logger, add } from 'lib'

// logger('hi there')
// // add(3,4).then(log)

const Person = function(name) {
  let _name = name
  this.sayHi = function() {
    console.log(this,`My name is ${_name}`)
  }
  this.getName = function() {
    return _name
  }
  const secret = function() {
    logger('is a secret')
  }
  this.spillBeans = function() {
    secret()
  }
  return this
}

function announce() {
  // console.log(this, `YO! MY NAME IS ${this.getName()}`)
  // logger(this, `YO!! MY NAME IS ${this.getName()}`)
  // console.log.apply(this, [this])
  logger.apply(this, [this])
  // logger(this.getName)
}

const s = new Person('Sam')
const j = new Person('Jake')

// s.sayHi()
// j.sayHi()

// console.log(j instanceof Person)
// j.spillBeans()

let x = 1

announce.call(j)
add(3,4).then(d => {
  setX(d)
  getX()
  return d
})

function setX(n) {
  x = n
}

function getX() {
  console.log('checking: ', x)
}
