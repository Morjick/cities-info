const data = require('../region.json')
const sklonyatorObject = require('../sklonyator/index')
const sklonyator = sklonyatorObject.incline

function getWithParams (elements = [], params = []) {
  const cities = []

  elements.forEach( el => {
    const city = {}

    params.forEach( param => {
      if(el[param]) {
        city[param] = el[param]
      }
    })

    if(params.length) {
      cities.push(city)
    } else {
      cities.push(el)
    }
  })
  

  return cities
}

function getWithOptions (options) {
  let cities = data
  
  if(options.where && typeof options.where == 'function') {
    cities = cities.filter( el => {
      if(options.where(el) == true) {
        return el
      }
    })
  }

  if(options.sklonyator) {
    cities.forEach( el => {
      el.sklon = sklonyator(el.name)
      el.sklonGeo = sklonyator(el.geoname_name)
    })
  }

  if(!Object.keys(options).length) return data

  return cities
}

function getCities (options = {}, params = []) {
  const withOptions = getWithOptions(options)


  const result = getWithParams(withOptions, params)

  return result
}

module.exports = getCities