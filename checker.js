const {filterCards} = require("./test.js")

const requirements = {
  gender: 'men',
  color: ['black', 'Brown', 'navy', 'dark gray'],
  size: 'XXL',
  event: 'Party',
  typeOfClothing: ['Shirt', 'Pants', 'Shoes'],
};

const filteredCards = filterCards(requirements);
console.log(filteredCards);
console.log(filteredCards.length);