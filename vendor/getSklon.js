const sklonyatorObject = require('../sklonyator/index')
const sklonyator = sklonyatorObject.incline

function getSklon (element) {
  return sklonyator(element)
}

module.exports = getSklon