const Axios = require('axios').default;

const titles = {
  'a new hope': 1,
  'the empire strikes back': 2,
  'return of the jedi': 3,
  'phantom menace': 4,
  'attack of the clones': 5,
  'revenge of the sith': 6,
  'WRONG': null
}

function correctTitle({ query }, res, next) {
  const { movie } = query;
  for (let title in titles) {
    if (title === movie.toLowerCase()) {
      next();
      break
    }
    if (title === "WRONG") {
      res.send('FAIL')
    }
  }
}

async function searchSWAPI ({ query }, res, next) {
  const { movie } = query;
  const lowerCaseMovie = movie.toLowerCase();
  let trueOrder = titles[lowerCaseMovie].toString()

  try {
    const response = await Axios.get(`https://swapi.dev/api/films/${trueOrder}/`)
    const { data } = response
    console.log(response)
    res.send(data)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
}

async function wookieSearchSWAPI({ query }, res, next) {
  const { movie } = query;
  console.log(movie)
  const lowerCaseMovie = movie.toLowerCase();
  let trueOrder = titles[lowerCaseMovie].toString()

  try {
    const response = await Axios.get(`https://swapi.dev/api/films/${trueOrder}/?format=wookiee`, {headers: {'Content-Type': 'application/json;charset=UTF-8', 'Accept': 'application/json'}})
    let { data } = response
    let newStr = data.substr(0)
    let regex = /\\w/g;
    let replaced = newStr.replace(regex, ' ')
    let parsed = JSON.parse(replaced)
    res.send(parsed)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
}

module.exports = {
  correctTitle,
  searchSWAPI,
  wookieSearchSWAPI
}