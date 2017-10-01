const logger = function(msg) {
  console.log('this', this)
  console.log('msg', msg)
}

module.exports = logger
