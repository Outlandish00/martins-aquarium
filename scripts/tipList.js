import { database } from './fishData.js'

export const tipList = () =>{
    let tipsHTML = "<h1 class = fish_tips_header>Some tips on fish care:</h1>"
    
    for (const tips of database.tips) {
        tipsHTML += `
        <ul class = "tips">
            <div class = "tips_for_care">
                <li class ="tip"><b>${tips.topic}</b></li>
                <li class ="tip">${tips.text}</li>
            </div>
        </ul>
        `
        ;
    }
    return tipsHTML

}

export const renderTipList = (tipsHTML)=>{
    const tipListings = document.getElementById('tipList');

    if (tipListings){
        tipListings.innerHTML = tipsHTML;
    }
    else{
        console.error('Could not find elements with id "tipsList"')
    }
}