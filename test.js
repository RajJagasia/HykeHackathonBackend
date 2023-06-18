const fs = require('fs');

const filterCards = (requirements) => {
  const jsonData = fs.readFileSync('./data2.json');
  const cards = JSON.parse(jsonData);

  const filteredData = cards.filter((item) => {
    const { gender, color, size, event, typeOfClothing } = requirements;

    if (gender && item.gender.toLowerCase() !== gender.toLowerCase()) {
      return false;
    }

    if (
      color &&
      color.length > 0 &&
      !color.some((c) => item.color.map((val) => val.toLowerCase()).includes(c.toLowerCase()))
    ) {
      return false;
    }

    if (size && item.size.toLowerCase() !== size.toLowerCase()) {
      return false;
    }

    // if (event && item.event.toLowerCase() !== event.toLowerCase()) {
    //   return false;
    // }

    // if (
    //   typeOfClothing &&
    //   typeOfClothing.length > 0 &&
    //   !typeOfClothing.map((val) => val.toLowerCase()).includes(item.type.toLowerCase())
    // ) {
    //   return false;
    // }

    if (
        typeOfClothing &&
        typeOfClothing.length > 0 &&
        !typeOfClothing.some(
          (type) =>
            item.title.toLowerCase().includes(type.toLowerCase()) ||
            item.type.toLowerCase().includes(type.toLowerCase())
        )
      ) {
        return false;
      }

    return true;
  });

  return filteredData;
};

// const requirements = {
//   gender: 'men',
//   color: ['black', 'Brown', 'navy', 'dark gray'],
//   size: 'XXL',
//   event: 'Party',
//   typeOfClothing: ['Shirt', 'Pants', 'Shoes'],
// };

// const filteredCards = filterCards(requirements);
// console.log(filteredCards);
// console.log(filteredCards.length);

module.exports = {filterCards};
