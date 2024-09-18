import {database} from "./fishData.js"

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of database.fish) {
        if(fish.length % 3 === 0){
            holyFish.push(fish)
        }

    }

    return holyFish
}

export const soldierFish = () => {
    const soldierFish = []

    for (const fish of database.fish){
        if  (fish.length % 5 === 0){
            soldierFish.push(fish)
        }

    }
    return soldierFish
}

export const regularFish = () => {
    const regFish = []

    for (const fish of database.fish){
        if (fish.length % 3 != 0 && fish.length % 5 != 0){
            regFish.push(fish)
        }
    }
    return regFish
}