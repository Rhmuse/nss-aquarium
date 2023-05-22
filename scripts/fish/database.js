const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            image: "#",
            length: "15cm",
            location: "Bahamas",
            species: "gold fish",
        },
        {
            name: "Kevin",
            food: "cytoplankton",
            image: "#",
            length: "10cm",
            location: "Gulf of Mexico",
            species: "sunfish",
        },
        {
            name: "Sandy",
            food: "schooling fish",
            image: "#",
            length: "35cm",
            location: "San Francisco bay",
            species: "shark",
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = []

    for (const fish of database) {
        if (fish.length % 3 === 0) holyFish.push(fish);
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldiers = [];

    for (const fish of database) {
        if (fish.length % 5 === 0) holyFish.push(fish);
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFish = []
    for (const fish of database) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) regularFish.push(fish);
    }
    return regularFish
}