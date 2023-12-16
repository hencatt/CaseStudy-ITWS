
let modeRelax = false;
let movement = 0;
let stopwatch;
let cardGroup = [
["🐨", "🐱‍👤"], 
["😒", "🐱‍🏍"],  
["🎂", "🎉", "🌹", "🐱‍🐉"], 
["🤢", "🐱‍🚀", "👀", "🎁"],
["💋", "😤", "🐮", "🐲"]
];

let levelActual = 0;
let levels = [
    {
        cards: cardGroup[0],
        movementMax: 4
    },
    {
        cards: cardGroup[0].concat(
            cardGroup[1]),
        movementMax: 10
    },
    {
        cards: cardGroup[0].concat(
            cardGroup[1], 
            cardGroup[2]),
        movementMax: 14
    },
    {
        cards: cardGroup[0].concat(
            cardGroup[1], 
            cardGroup[2], 
            cardGroup[3]),
        movementMax: 25
    },
    {
        cards: cardGroup[0].concat(
            cardGroup[1], 
            cardGroup[2], 
            cardGroup[3], 
            cardGroup[4]),
        movementMax: 60
    }
];
