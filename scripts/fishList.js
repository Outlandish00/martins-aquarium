import { database } from './fishData.js'

export const fishList = (allTheFishes) => {
    let fishHTML = ''

    for (const fish of allTheFishes) {
        fishHTML+= `
        <article class = "fish">
        <img src="${fish.image}" alt = "This is a picture of ${fish.name}" class = "fish_image">
            <div class = "fish_details">
                <h6 class = "fish_name">This is ${fish.name}</h6>
                <p class = "fish_species">They are a ${fish.species}</p>
                <p class = "fish_length">They are ${fish.length} in length</p>
                <p class = "fish_location">They live at ${fish.location}</p>
                <p class="fish_diet">The are an ${fish.diet}</p>
            </div>
        </article>
        `;
    }
    return fishHTML
}

export const renderFishList =  (first, second, third) =>{
    const fishListings =  document.getElementById('fishList');

    if (fishListings){
        fishListings.innerHTML = `${first}${second}${third}`;
    }
    else {
        console.error('Could not find elements with id "fishList')
    }
};