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