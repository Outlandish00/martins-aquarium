import {fishList} from './fishList.js'
import {tipList} from './tipList.js'
import {locationList, renderLocations} from './locationList.js'
import { renderFishList } from './fishList.js'
import {renderTipList} from './tipList.js'
import { mostHolyFish, soldierFish, regularFish } from './fishFunctions.js'
//This generates the fish list
// const fishHTML = fishList()
const mostHolyFishHTML = fishList(mostHolyFish())
const soldierFishHTML = fishList(soldierFish())
const regFishHMTML = fishList(regularFish())
console.log(mostHolyFishHTML)

//Renders the fishList in the DOM
renderFishList(mostHolyFishHTML, soldierFishHTML, regFishHMTML)



// Generates the care tips
const tipsHTML = tipList()
renderTipList(tipsHTML)

//Generates the location list
const locationsHTML = locationList()
renderLocations(locationsHTML)

// let mostHolyFishHTML = fishList(mostHolyFish())
// console.log(mostHolyFishHTML)
// console.log(soldierFish())
// console.log(regularFish())