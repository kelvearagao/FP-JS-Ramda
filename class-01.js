const R = require("ramda")

const person = {
  id: 1,
  name: "Joe"
}

const generateUrl = id => `https://img.socialnetwork.com/avatar/${id}.png`

const generateUrlFromPerson = R.compose(
  generateUrl,
  R.propOr("default", "id")
)

// const getUpdatedPerson = (person) => R.assoc('avatar', getUrlFromPerson(person), person)

const getUpdatedPerson = R.converge(R.assoc("avatar"), [
  generateUrlFromPerson,
  R.identity
])

const result = getUpdatedPerson(person)

console.log(result)
