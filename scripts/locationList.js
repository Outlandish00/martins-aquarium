import { database } from './fishData.js'

export const locationList = () => {
    let locationsHTML = ''

    for (const locations of database.locations) {
        locationsHTML+=`
        <article class = "locations">
            <section class = "location"><b>${locations.name}</b> which is located in ${locations.country}. ${locations.description}</section>
        </article>
        `
        
    }
    return locationsHTML
}
export const renderLocations = (locationsHTML) =>{
    let locationListings = document.getElementById("locationList")

    if (locationListings){
        locationListings.innerHTML = locationsHTML
    }
    else{
        console.error("Couldn't find a element with the id 'locationList'")
    }
}
