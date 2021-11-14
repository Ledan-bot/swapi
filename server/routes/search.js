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
    console.log(data)
    res.send(data)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
}

module.exports = {
  correctTitle,
  searchSWAPI
}