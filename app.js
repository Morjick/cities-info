const getCities = require('./vendor/getCities')
const getSklon = require('./vendor/getSklon')

const Cities = {
  sklon: (element) => {
    return getSklon(element)
  },
  getCity: (options, params) => {
    return getCities (options, params) 
  }
}


module.exports = Cities