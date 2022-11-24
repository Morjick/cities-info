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


const cities = Cities.sklon('Смоленск')
console.log(cities)


module.exports = Cities