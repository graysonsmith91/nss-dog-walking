import { getPets, getWalkers, getWalkerCities, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }
    return petWalker
}

// pet walker returns the walker that matches pet id

// new loop through walker cities Id and match to current pet walker id (from walkers)
// and returns walker city individual 

const walkerCitiesMatcher = (petWalker) => {
    let walkerCityMatch = null

    for (const assignment of walkerCities) {
        if (petWalker.id === assignment.walkerId) {
            walkerCityMatch = assignment
        }
    }
    return walkerCityMatch
}



// new loop through cities and see if walker city obj from last loop matches city id then
// return city name

const cityToWalkerMatcher = (walkerCityMatch) => {
    let cityMatch = null

    for (const city of cities) {
        if (walkerCityMatch.cityId === city.id) {
            cityMatch = city.name
        }
    }
    return cityMatch
}



export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        // new functions go here then access them in string below
        const currentWalkerCitiesMatch = walkerCitiesMatcher(currentPetWalker)
        const currentCityMatch = cityToWalkerMatcher(currentWalkerCitiesMatch)

        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentCityMatch}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}