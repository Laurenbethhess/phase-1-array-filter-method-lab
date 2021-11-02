// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name) {
    return array.filter( element => {
      return element.toLowerCase() === name.toLowerCase()
    })
  }

function fuzzyMatch(array, name) {
    return array.filter( element => {
        return element.charAt(0) === name.charAt(0)
      })
}

function matchName(array, name) {
    return array.filter( element => {
        return element.name === name
      })
}

// function findMatching(array, name) {
//     const names =  array.filter(element => element.toLowerCase() === name.toLowerCase())
//     return names
//   }

// function fuzzyMatch(array, name) {
//     const names =  array.filter(element => element.charAt(0) === name.charAt(0))
//     return names
// }

// function matchName(array, name) {
//     const names = array.filter( element => element.name === name)
//     return names
// }
