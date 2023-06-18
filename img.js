const fs = require('fs');


const data = require('./data2.json');
  
  const imagePaths = {};

  data.forEach(product => {
    const { id, image } = product;
    imagePaths[id] = `require("${image}")`;
  });
  
  const jsonContent = JSON.stringify(imagePaths, null, 2);
  
  fs.writeFile('imagePaths.json', jsonContent, 'utf8', err => {
    if (err) {
      console.error('Error writing to imagePaths.json:', err);
    } else {
      console.log('imagePaths.json file has been created!');
    }
  });
  