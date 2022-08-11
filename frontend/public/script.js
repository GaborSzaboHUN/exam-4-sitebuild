const headerComponent = function () {
    return `
    <header>
        <h1>${beers.logo}</h1>
        <p><span class="material-symbols-outlined">
        menu
        </span></p>
    </header>`
}

const cardComponent = function (number, name, subtitle, type) {
    return `
    <div class="beer-card-container">
        <div class="card-number">${number}</div>
        <div class="card-inner">
            <h2 class="beer-name">${name}</h2>
            <p class="sub-title">${subtitle}</p>
            <p class="beer-type">${type}</p>
        </div>
        <button class="details">details <span class="material-symbols-outlined">
        arrow_forward
        </span> </button>
    </div>`
}


const loadEvent = function () {
    const rootElement = document.getElementById("root")

    const cardsContainer = function () {
        return `
        <div id="cards-container"></div>
        `
    }

    rootElement.insertAdjacentHTML("beforeend", headerComponent())
    rootElement.insertAdjacentHTML("beforeend", cardsContainer())

    const beersComponent = document.getElementById("cards-container")
    /* 
        for (let beer of beers.cards) {
            beersComponent.insertAdjacentHTML("beforeend", cardComponent(beer.number, beer.title, beer.sub, beer.text))
        }
     */
    for (let i = 0; i < beers.cards.length; i++) {
        beersComponent.insertAdjacentHTML("beforeend", cardComponent(1 * [i] + 1, beers.cards[i].title, beers.cards[i].sub, beers.cards[i].text))
    }

}

window.addEventListener("load", loadEvent)